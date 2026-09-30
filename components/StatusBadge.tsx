import { Inline } from "./Text";

const VARIANTS: Record<string, string> = {
  live: "live",
  launched: "live",
  shipped: "live",
  "building now": "building",
  "shut down": "shutdown",
  "paid work": "paid",
  internship: "paid",
  "personal tool": "personal",
};

export function StatusBadge({ status }: { status: string }) {
  if (!status) return null;
  const variant = VARIANTS[status.trim().toLowerCase()] ?? "default";
  return (
    <span
      className="status-badge inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide whitespace-nowrap"
      data-status={variant}
    >
      <span className="sr-only">Status: </span>
      <Inline text={status} />
    </span>
  );
}
