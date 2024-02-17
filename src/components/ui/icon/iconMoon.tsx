import { IconThemeProps } from "../../../api/types";

const IconMoon = ({ width, height, className }: IconThemeProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.125 1.845C4.8375 1.62 5.5875 1.5 6.375 1.5C10.515 1.5 13.875 4.86 13.875 9C13.875 13.14 10.515 16.5 6.375 16.5C5.5875 16.5 4.8375 16.38 4.125 16.155C7.17 15.2025 9.375 12.36 9.375 9C9.375 5.64 7.17 2.7975 4.125 1.845ZM12.375 9C12.375 6.69 11.0625 4.68 9.15 3.6825C10.245 5.1825 10.875 7.0275 10.875 9C10.875 10.9725 10.245 12.8175 9.15 14.3175C11.0625 13.32 12.375 11.31 12.375 9Z"
        fill="#ffd000"
      />
    </svg>
  );
};

export default IconMoon;
