import SectionLine from "../../ui/SectionLine/SectionLine";
import Skeleton from "../../ui/Skeleton/Skeleton";
import styles from "./filmInfo.module.scss";
import LoadingIcon from "../../ui/icon/LoadingIcon";

const FilmInfoSkeleton = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainInfoContainer}>
          <div className={styles.filmPosterContainer}>
            <div className={styles.loadingImage}>
              <LoadingIcon width={40} height={40} />
            </div>
          </div>
          <div className={styles.ratingList}>
            <div className={styles.ratingItem}>
              <h1>IMDB Rating:</h1>
              <div className={styles.iconWithRating}>
                <p>
                  <Skeleton width="17vw" height="3vh" />
                </p>
              </div>
            </div>
            <div className={styles.ratingItem}>
              <h1>METACRITIC:</h1>
              <div className={styles.iconWithRating}>
                <p>
                  <Skeleton width="17vw" height="3vh" />
                </p>
              </div>
            </div>
          </div>
          <h1 className={styles.title}>
            {" "}
            <Skeleton width="40vw" height="4vh" />
          </h1>
          <div className={styles.addInfo}>
            <div className={styles.runtime}>
              <p>
                <Skeleton width="40vw" height="4vh" />
              </p>
            </div>

            <div className={styles.genre}>
              <p>
                <Skeleton width="40vw" height="4vh" />
              </p>
            </div>
            <div className={styles.year}>
              <p>
                <Skeleton width="40vw" height="4vh" />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="40vw" height="4vh" />
              </p>
            </div>
            <div className={styles.plot}>
              <Skeleton width="40vw" height="4vh" />
              <Skeleton width="40vw" height="4vh" />
              <Skeleton width="40vw" height="4vh" />
            </div>
          </div>
        </div>
        <SectionLine />

        <Skeleton width="50vw" height="4vh" />
        <div className={styles.addInfoContainer}>
          <Skeleton width="30vw" height="4vh" />
          <Skeleton width="30vw" height="4vh" />
          <Skeleton width="30vw" height="4vh" />
          <Skeleton width="30vw" height="4vh" />
          <Skeleton width="30vw" height="4vh" />
          <Skeleton width="30vw" height="4vh" />
        </div>
      </div>
    </>
  );
};

export default FilmInfoSkeleton;
