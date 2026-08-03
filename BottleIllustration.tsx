/** 极简护肤瓶线条插画，颜色全部取自主题 token */
export function BottleIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bottleFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ai-effect)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="46" y="10" width="28" height="20" rx="6" stroke="var(--primary)" strokeWidth="2" />
      <path d="M52 30h16v10H52z" stroke="var(--primary)" strokeWidth="2" />
      <rect
        x="30"
        y="40"
        width="60"
        height="106"
        rx="22"
        fill="url(#bottleFill)"
        stroke="var(--primary)"
        strokeWidth="2"
      />
      <path
        d="M42 104c8-6 16 6 24 0s10-2 12 0"
        stroke="var(--ai-effect)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="98" cy="52" r="4" fill="var(--ai-effect)" opacity="0.7" />
      <circle cx="22" cy="76" r="2.5" fill="var(--ai-effect)" opacity="0.5" />
    </svg>
  );
}
