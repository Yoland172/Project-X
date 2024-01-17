import { IconProp } from "../../types/uiTypes";

const LeftLongArrow = ({width,height}:IconProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 24"
    >
      <path
        d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92894 13.1924 1.97919 12.6066 1.3934C12.0208 0.807616 11.0711 0.807616 10.4853 1.3934L0.939339 10.9393ZM68 10.5L2 10.5L2 13.5L68 13.5L68 10.5Z"
        fill="white"
      />
    </svg>
  );
};

export default LeftLongArrow;