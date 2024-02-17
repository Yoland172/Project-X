import { useTranslation } from "react-i18next";
import { SampleArrowProp } from "../../../../api/types";
import RightLongArrow from "../../../ui/icon/rightLongArrow";
import styles from "./sampleArrows.module.scss";
import classNames from "classnames";

export const SampleNextArrow = ({ onClick,theme }: SampleArrowProp) => {
  const {t} = useTranslation();
  return <div className={classNames(styles.nextArrow, theme && styles[theme])} onClick={onClick}>
    <p>{t("homePage.header.arrowText.next")}</p>
    <RightLongArrow width={75} height={75} />
  </div>;
};

export default SampleNextArrow;
