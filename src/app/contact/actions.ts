"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message" | "consent", string>>;
  values?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (fd: FormData, k: string, max = 200) => String(fd.get(k) ?? "").trim().slice(0, max);

export async function sendContact(_prev: ContactState, fd: FormData): Promise<ContactState> {
  const values = {
    name: str(fd, "name", 120),
    email: str(fd, "email", 160),
    company: str(fd, "company", 160),
    phone: str(fd, "phone", 40),
    service: str(fd, "service", 120),
    budget: str(fd, "budget", 60),
    message: str(fd, "message", 5000),
    consent: fd.get("consent") === "on" ? "yes" : "",
  };

  // Honeypot: real visitors never see or fill this field
  if (str(fd, "website")) return { status: "success", message: "Thanks. Your message has been sent." };

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid work email, like name@company.com.";
  if (values.message.length < 20) errors.message = "Tell us a little more about the project (at least 20 characters).";
  if (!values.consent) errors.consent = "Confirm we may contact you about this enquiry.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Check the highlighted fields and send again.", errors, values };
  }

  const subject = `New enquiry from ${values.name}${values.company ? ` (${values.company})` : ""}`;
  const text = Object.entries(values)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    if (process.env.CONTACT_WEBHOOK_URL) {
      const res = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, ...values, source: site.url }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? `Website <noreply@${new URL(site.url).hostname.replace(/^www\./, "")}>`,
          to: [process.env.CONTACT_TO_EMAIL ?? site.email],
          reply_to: values.email,
          subject,
          text,
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    } else if (process.env.NODE_ENV !== "production") {
      console.info("[contact] No delivery configured; enquiry received:\n" + text);
    } else {
      throw new Error("No contact delivery configured");
    }
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return {
      status: "error",
      message: `We could not send your message. Email us directly at ${site.email} and we will reply within 24 hours.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks. Your message has been sent. A senior engineer will reply within 24 hours.",
  };
}
