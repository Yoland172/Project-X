import styles from "./mainHeader.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsForSlider, slides } from "./slides";

function MainHeader() {
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