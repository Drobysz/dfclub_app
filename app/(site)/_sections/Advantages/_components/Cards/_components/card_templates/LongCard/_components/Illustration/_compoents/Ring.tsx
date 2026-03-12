import cn from "classnames";

export const Ring = ({ percent }: { percent: number }) => {
  const r = 10; // радиус
  const c = 2 * Math.PI * r; // длина окружности
  const dashOffset = c * (1 - percent / 100);

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className="shrink-0">
      {/* фон */}
      <circle
        cx="14"
        cy="14"
        r={r}
        stroke="rgba(0,0,0,0.12)"
        strokeWidth="4"
        fill="none"
      />

      {/* прогресс */}
      <circle
        cx="14"
        cy="14"
        r={r}
        stroke="currentColor"
        className={cn("text-emerald-500 transition-[stroke-dashoffset] duration-400 ease-out")}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 14 14)" // старт сверху
      />
    </svg>
  );
}