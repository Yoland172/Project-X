import { SampleArrowProp } from "../../../../api/types";
import styles from "./sampleArrows.module.scss";
import LeftLongArrow from "../../../ui/icon/leftLongArrow";
import { useTranslation } from "react-i18next";

const SamplePrevArrow = ({ onClick }: SampleArrowProp) => {
  const {t} = useTranslation();
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <LeftLongArrow width={75} height={75} />
      <p>{t("homePage.header.arrowText.prev")}</p>
    </div>
  );
};

export default SamplePrevArrow;
