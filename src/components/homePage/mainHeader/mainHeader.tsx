import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./slides";
import styles from "./mainHeader.module.scss";
import SampleNextArrow from "./sampleArrows/SampleNextArrow";
import SamplePrevArrow from "./sampleArrows/SamplePrevArrow";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

interface SettingForSlider {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  arrows?: boolean;
  pauseOnHover?: boolean;
  autoplaySpeed?: number;
  dotsClass?: string;
  nextArrow?: any;
  prevArrow?: any;
}

interface MainHeaderProps {
  theme: string;
}

const MainHeader = ({theme}: MainHeaderProps) => {
  const settingsForSlider: SettingForSlider = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    pauseOnHover: true,
    autoplaySpeed: 6000,
    dotsClass: `${classNames(styles.button__bar, theme && styles[theme])}`,
    nextArrow: <SampleNextArrow theme={theme}/>,
    prevArrow: <SamplePrevArrow theme={theme}/>,
  };

  const { t } = useTranslation();

  return (
    <div className={styles.roundaboutContainer}>
      <Slider {...settingsForSlider}>
        {slides.map((e, index) => {
          return (
            <div key={index}>
              <div className={styles.imageContainer}>
                <img src={e.img} alt="" />
              </div>
              <div className={styles.filmInfoContainer}>
                <div className={styles.filmYearContainer}>
                  <p> {e.year}</p>
                </div>
                <div className={styles.filmNameContainer}>
                  <p> {e.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <p className={classNames(styles.bigMainText, theme && styles[theme])}>
        <span>{t("homePage.header.bigText.part1")}</span>
        {t("homePage.header.bigText.part2")}
      </p>
    </div>
  );
};
export default MainHeader;
