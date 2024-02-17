import { IconProps } from "../../../types/uiTypes";

const SearchArrow = ({ width, height }: IconProps) => {
  return (
    <svg width={width} height={height}>
      <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
    </svg>
  );
};

export default SearchArrow;