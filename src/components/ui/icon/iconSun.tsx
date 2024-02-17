import { IconThemeProps } from "../../../api/types";

const IconSun = ({ width, height, className }: IconThemeProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 0.787506H9.75V3.00001H8.25V0.787506ZM3.72 2.66251L5.07 4.00501L4.005 5.06251L2.6625 3.72001L3.72 2.66251ZM3 8.25H0.75V9.75H3V8.25ZM15.3357 3.71401L14.2803 2.65876L12.9386 4.00043L13.9939 5.05576L15.3357 3.71401ZM12.93 13.995L14.2725 15.345L15.33 14.2875L13.98 12.945L12.93 13.995ZM17.25 8.25H15V9.75H17.25V8.25ZM9 4.5C6.5175 4.5 4.5 6.5175 4.5 9C4.5 11.4825 6.5175 13.5 9 13.5C11.4825 13.5 13.5 11.4825 13.5 9C13.5 6.5175 11.4825 4.5 9 4.5ZM6 9C6 10.6575 7.3425 12 9 12C10.6575 12 12 10.6575 12 9C12 7.3425 10.6575 6 9 6C7.3425 6 6 7.3425 6 9ZM9.75 15V17.2125H8.25V15H9.75ZM3.72 15.3375L2.6625 14.28L4.005 12.93L5.0625 13.9875L3.72 15.3375Z"
        fill="#057cf4"
      />
    </svg>
  );
};

export default IconSun;
