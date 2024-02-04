import { SampleArrowProp } from "../../../../api/types";
import RightLongArrow from "../../../ui/icon/rightLongArrow";
import styles from "./sampleArrows.module.scss";

export const SampleNextArrow = ({ onClick }: SampleArrowProp) => {
  return <div className={styles.nextArrow} onClick={onClick}>
    <p>Next</p>
    <RightLongArrow width={75} height={75} />
  </div>;
};

export default SampleNextArrow;
