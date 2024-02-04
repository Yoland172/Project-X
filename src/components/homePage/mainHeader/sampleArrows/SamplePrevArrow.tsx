import { SampleArrowProp } from "../../../../api/types";
import styles from "./sampleArrows.module.scss";
import LeftLongArrow from "../../../ui/icon/leftLongArrow";

const SamplePrevArrow = ({ onClick }: SampleArrowProp) => {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <LeftLongArrow width={75} height={75} />
      <p>Prev</p>
    </div>
  );
};

export default SamplePrevArrow;
