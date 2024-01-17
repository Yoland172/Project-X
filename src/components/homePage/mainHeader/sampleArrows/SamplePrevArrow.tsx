import { SampleArrowProp } from "../../../../api/types";
import LeftLongArrow from "../../../../assets/icon/leftLongArrow";
import styles from "./sampleArrows.module.scss";

const SamplePrevArrow = ({ onClick }: SampleArrowProp) => {
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <LeftLongArrow width={75} height={75}/>
      <p>Prev</p>
    </div>
  );
};

export default SamplePrevArrow;
