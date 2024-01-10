import styles from "./videoHeader.module.scss";
import header from "../../../assets/img/iron-man-cave-time-travel-3840x1080-112 (1).jpg";
import { Link } from "react-router-dom";
import LeftLongArrow from "../../../assets/icon/leftLongArrow";

const VideoHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.videoContainer}>
        <img src={header} alt="headerImage" />
      </div>
      <Link to={"/home"}>
        <div className={styles.backArrowContainer}>
          <LeftLongArrow />
          <p>Back</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoHeader;
