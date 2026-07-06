function MosqueGraphic({ className }) {
  return (
    <svg
      viewBox="0 0 520 520"
      className={className}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="domeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9fd2fd" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="rgba(159,210,253,0.55)" />
          <stop offset="100%" stopColor="rgba(159,210,253,0)" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="230" r="230" fill="url(#glow)" />

      <g opacity="0.55">
        <path d="M60 470 Q60 380 120 380 Q180 380 180 470 Z" fill="none" stroke="#ffffff" strokeWidth="3" />
        <path d="M340 470 Q340 380 400 380 Q460 380 460 470 Z" fill="none" stroke="#ffffff" strokeWidth="3" />
      </g>

      <path
        d="M150 470 L150 300 Q150 220 260 210 Q370 220 370 300 L370 470 Z"
        fill="rgba(255,255,255,0.08)"
        stroke="#ffffff"
        strokeWidth="3"
      />

      <path
        d="M180 470 L180 320 Q180 260 260 250 Q340 260 340 320 L340 470 Z"
        fill="rgba(255,255,255,0.12)"
      />

      <circle cx="260" cy="150" r="60" fill="url(#domeGradient)" />
      <path d="M200 150 Q260 70 320 150 Z" fill="url(#domeGradient)" />
      <rect x="252" y="70" width="16" height="34" rx="4" fill="#9fd2fd" />
      <circle cx="260" cy="60" r="10" fill="#9fd2fd" />

      <g stroke="#9fd2fd" strokeWidth="2.5" opacity="0.8">
        <circle cx="260" cy="325" r="34" fill="none" />
        <path d="M260 291 L260 359 M226 325 L294 325" opacity="0.4" />
      </g>

      <g opacity="0.5" stroke="#ffffff" strokeWidth="2">
        <path d="M40 470 H480" />
        <path d="M100 380 Q100 250 100 470" fill="none" />
        <path d="M420 380 Q420 250 420 470" fill="none" />
      </g>
    </svg>
  )
}

export default MosqueGraphic
