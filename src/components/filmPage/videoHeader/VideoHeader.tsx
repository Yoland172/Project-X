import { Link } from "react-router-dom";
import styles from "./videoHeader.module.scss";
import LeftLongArrow from "../../../assets/icon/leftLongArrow";
import header from "../../../assets/img/mocks/iron-man-cave-time-travel-3840x1080-112 (1).jpg";

const VideoHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.videoContainer}>
        <img src={header} alt="headerImage" />
      </div>
      <Link to={"/home"}>
        <div className={styles.backArrowContainer}>
          <LeftLongArrow width={68} height={24}/>
          <p>Back</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoHeader;