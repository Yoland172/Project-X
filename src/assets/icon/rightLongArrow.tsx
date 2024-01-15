import { IconProp } from "../../types/uiTypes";

const RightLongArrow = ({width,height}:IconProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.0607 13.0607C67.6464 12.4749 67.6464 11.5251 67.0607 10.9394L57.5147 1.39341C56.9289 0.807621 55.9792 0.807621 55.3934 1.39341C54.8076 1.97919 54.8076 2.92894 55.3934 3.51473L63.8787 12L55.3934 20.4853C54.8076 21.0711 54.8076 22.0208 55.3934 22.6066C55.9792 23.1924 56.9289 23.1924 57.5147 22.6066L67.0607 13.0607ZM-2.62268e-07 13.5L66 13.5L66 10.5L2.62268e-07 10.5L-2.62268e-07 13.5Z"
        fill="white"
      />
    </svg>
  );
};

export default RightLongArrow;