/**
 * Hero illustration: a rising growth arrow over bar charts and a network mesh, in brand colours.
 * Pure SVG (no image download), so it paints with the HTML and costs nothing for LCP.
 */
export function GrowthIllustration({ className = "" }: { className?: string }) {
  const bars = [
    [70, 250, 120],
    [130, 210, 160],
    [190, 230, 140],
    [250, 170, 200],
    [310, 190, 180],
    [370, 120, 250],
    [430, 140, 230],
    [490, 70, 300],
  ] as const;
  const nodes = [
    [40, 60], [150, 30], [260, 80], [380, 40], [520, 70], [580, 150], [470, 180], [330, 150], [200, 130], [90, 170],
  ] as const;
  const links = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0], [1, 8], [2, 7], [3, 6], [4, 6]] as const;

  return (
    <svg viewBox="0 0 620 440" overflow="visible" className={className} role="img" aria-labelledby="growth-title">
      <title id="growth-title">A rising growth arrow over bar charts</title>
      <defs>
        <linearGradient id="g-arrow" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#6d28d9" />
          <stop offset="0.55" stopColor="#0a5bff" />
          <stop offset="1" stopColor="#00c2f0" />
        </linearGradient>
        <linearGradient id="g-arrow-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0039c6" />
          <stop offset="1" stopColor="#3b1a8c" />
        </linearGradient>
        <linearGradient id="g-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9d5f2" />
          <stop offset="1" stopColor="#c9d5f2" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="g-glow" cx="0.75" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="400" cy="170" rx="200" ry="150" fill="url(#g-glow)" />

      {/* network mesh */}
      <g stroke="#9db2e0" strokeOpacity="0.45" strokeWidth="1">
        {links.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g fill="#9db2e0" fillOpacity="0.7">
        {nodes.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
        ))}
      </g>

      {/* bar chart */}
      {bars.map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="34" height={h} rx="4" fill="url(#g-bar)" />
      ))}

      {/* rising arrow: side face first for depth, then the top face */}
      <path
        d="M30 400 L210 300 L300 330 L470 150 L438 128 L560 60 L540 196 L512 172 L322 372 L230 342 L58 420 Z"
        fill="url(#g-arrow-side)"
        transform="translate(0 14)"
      />
      <path
        className="growth-arrow"
        d="M30 400 L210 300 L300 330 L470 150 L438 128 L560 60 L540 196 L512 172 L322 372 L230 342 L58 420 Z"
        fill="url(#g-arrow)"
      />
      <path d="M30 400 L210 300 L300 330 L470 150" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />

      {/* data points */}
      {[
        [210, 300],
        [300, 330],
        [470, 150],
      ].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="11" fill="#ffffff" />
          <circle cx={x} cy={y} r="5" fill="#0a5bff" />
        </g>
      ))}
    </svg>
  );
}
