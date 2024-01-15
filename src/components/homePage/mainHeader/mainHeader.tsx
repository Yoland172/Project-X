import styles from "./mainHeader.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./slides";
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
}

function MainHeader() {
  const settingsForSlider: SettingForSlider = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    autoplaySpeed: 4000,
  };
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
      <div className={styles.bigMainText}>
        <p>Explore movies and series</p>
      </div>
    </div>
  );
}
export default MainHeader;
