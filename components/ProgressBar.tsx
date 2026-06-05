type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className="h-2 w-full overflow-hidden rounded-sm bg-neutral-200"
      aria-label={`${safeValue}% complete`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
    >
      <div
        className="h-full rounded-sm bg-emerald-500 transition-all duration-500"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
