import { Link } from "react-router-dom";
import styles from "./videoHeader.module.scss";
import LeftLongArrow from "../../ui/icon/leftLongArrow";
import header from "../../../assets/img/mocks/iron-man-cave-time-travel-3840x1080-112 (1).jpg";
import { ROUTE_HOME_PAGE } from "../../../lib/constants";

const VideoHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.videoContainer}>
        <img src={header} alt="headerImage" />
      </div>
      <Link to={ROUTE_HOME_PAGE}>
        <div className={styles.backArrowContainer}>
          <LeftLongArrow width={68} height={24}/>
          <p>Back</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoHeader;