import SectionLine from "../../UI/SectionLine/SectionLine";
import Skeleton from "../../UI/Skeleton/Skeleton";
import LoadingIcon from "../../../assets/icon/LoadingIcon";
import styles from "./filmInfo.module.scss";

const FilmInfoSkeleton = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.filmPosterContainer}>
          <div className={styles.loadingImage}>
            <LoadingIcon width={40} height={40} />
          </div>
          <div className={styles.ratingList}>
            <div className={styles.ratingItem}>
              <h1>IMDB Rating:</h1>
              <div className={styles.iconWithRating}>
                <p>
                  <Skeleton width="10vw" height="2vh"  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filmInfoContainer}>
          <h1 className={styles.title}>
            <Skeleton width="45vw" height="5vh" />
          </h1>
          <div className={styles.addInfo}>
            <div className={styles.runtime}>
              <p>
                <Skeleton width="34vw" height="3vh" />
              </p>
            </div>
            <div className={styles.genre}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
            <div className={styles.year}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="34vw" height="3vh" />
              </p>
            </div>
            <div className={styles.type}>
              <p>
                <Skeleton width="34vw" height="3vh"  />
              </p>
            </div>
          </div>
          <SectionLine />

          <Skeleton width="50vw" height="4vh" />
          <div className={styles.addInfoContainer}>
            <Skeleton width="15vw" height="4vh"  />
            <Skeleton width="15vw" height="4vh"  />
            <Skeleton width="15vw" height="4vh"  />
            <Skeleton width="15vw" height="4vh"  />
            <Skeleton width="15vw" height="4vh"  />
            <Skeleton width="15vw" height="4vh"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmInfoSkeleton;
