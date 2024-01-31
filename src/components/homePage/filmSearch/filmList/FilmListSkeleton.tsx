import Skeleton from "../../../UI/Skeleton/Skeleton";
import styles from "./filmList.module.scss";

const FilmListSkeleton = () => {
  return (
    <div className={styles.mainSkeletonContainer}>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
      <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
          <Skeleton width="25vw" height="3vh" />
        </div>
        <div className={styles.addInfo}>
          <Skeleton width="5vh" height="3vh" />
        </div>
      </div>
    </div>
  );
};

export default FilmListSkeleton;
