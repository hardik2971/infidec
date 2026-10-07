"use client";

import { useActionState } from "react";
import { Icon } from "@/components/icon";
import { sendContact, type ContactState } from "./actions";

const initial: ContactState = { status: "idle", message: "" };

const field =
  "mt-2 block w-full rounded-btn border bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/80 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";

export function ContactForm({ services }: { services: string[] }) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const v = state.values ?? {};
  const e = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-panel border border-line bg-white p-8 md:p-10">
        <Icon name="check" className="size-16" />
        <h2 className="mt-5 text-2xl font-semibold text-ink">Message sent</h2>
        <p className="mt-3 leading-relaxed text-slate">{state.message}</p>
      </div>
    );
  }

  const border = (k: keyof NonNullable<ContactState["errors"]>) => (e[k] ? "border-red-600" : "border-line");

  return (
    <form action={action} noValidate className="rounded-panel border border-line bg-white p-6 md:p-10">
      <h2 className="text-2xl font-semibold text-ink">Tell us about your project</h2>
      <p className="mt-2 text-slate">Fields marked * are required.</p>

      {state.status === "error" && (
        <p role="alert" className="mt-6 rounded-btn bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {state.message}
        </p>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            defaultValue={v.name}
            aria-invalid={Boolean(e.name)}
            aria-describedby={e.name ? "name-err" : undefined}
            className={`${field} ${border("name")}`}
          />
          {e.name && <p id="name-err" className="mt-1.5 text-sm text-red-700">{e.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            aria-invalid={Boolean(e.email)}
            aria-describedby={e.email ? "email-err" : undefined}
            className={`${field} ${border("email")}`}
          />
          {e.email && <p id="email-err" className="mt-1.5 text-sm text-red-700">{e.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" defaultValue={v.company} className={`${field} border-line`} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={`${field} border-line`} />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-ink">
            What do you need?
          </label>
          <select id="service" name="service" defaultValue={v.service ?? ""} className={`${field} border-line`}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-ink">
            Estimated budget
          </label>
          <select id="budget" name="budget" defaultValue={v.budget ?? ""} className={`${field} border-line`}>
            <option value="">Select a range</option>
            <option>Under $25k</option>
            <option>$25k to $75k</option>
            <option>$75k to $200k</option>
            <option>Over $200k</option>
            <option>Ongoing monthly team</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Project details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            defaultValue={v.message}
            placeholder="Goals, current state, timeline and anything we should know."
            aria-invalid={Boolean(e.message)}
            aria-describedby={e.message ? "message-err" : undefined}
            className={`${field} ${border("message")}`}
          />
          {e.message && <p id="message-err" className="mt-1.5 text-sm text-red-700">{e.message}</p>}
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-slate">
            <input
              type="checkbox"
              name="consent"
              defaultChecked={Boolean(v.consent)}
              className="mt-0.5 size-4 rounded border-line accent-blue"
              aria-invalid={Boolean(e.consent)}
              aria-describedby={e.consent ? "consent-err" : undefined}
            />
            <span>
              I agree that {"INFIDEC"} may contact me about this enquiry, as described in the{" "}
              <a href="/privacy-policy" className="inline-block py-1 font-medium text-blue underline-offset-2 hover:underline">
                privacy policy
              </a>
              . *
            </span>
          </label>
          {e.consent && <p id="consent-err" className="mt-1.5 text-sm text-red-700">{e.consent}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-btn bg-blue px-6 font-semibold text-white hover:bg-blue-deep disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
