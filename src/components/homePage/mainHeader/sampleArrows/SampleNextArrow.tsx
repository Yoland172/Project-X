import { useTranslation } from "react-i18next";
import { SampleArrowProp } from "../../../../api/types";
import RightLongArrow from "../../../ui/icon/rightLongArrow";
import styles from "./sampleArrows.module.scss";

export const SampleNextArrow = ({ onClick }: SampleArrowProp) => {
  const {t} = useTranslation();
  return <div className={styles.nextArrow} onClick={onClick}>
    <p>{t("homePage.header.arrowText.next")}</p>
    <RightLongArrow width={75} height={75} />
  </div>;
};

export default SampleNextArrow;
