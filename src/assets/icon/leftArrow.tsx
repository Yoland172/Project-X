import { IconProp } from "../../types/types";

const LeftArrow = ({ width, height }: IconProp) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
    >
      <path
        d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
        data-name="Left"
      />
    </svg>
  );
};

export default LeftArrow;