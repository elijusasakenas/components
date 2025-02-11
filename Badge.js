const Badge = ({ text, color, size }) => (
  <span
    className={`inline-flex items-center rounded-md bg-${color}-50 px-2 py-1 text-${size} font-medium text-neutral-600 ring-1 ring-inset ring-${color}-500/10`}
  >
    {text}
  </span>
);
export default Badge;
