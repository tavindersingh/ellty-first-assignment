type CheckIconProps = {
  strokeColor?: string;
};

export default function CheckIcon({ strokeColor }: CheckIconProps) {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
        stroke={strokeColor ?? "#000"}
        stroke-linecap="round"
      />
    </svg>
  );
}
