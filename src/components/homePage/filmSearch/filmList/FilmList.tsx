import { Link } from "react-router-dom";
import styles from "./filmList.module.scss";
import { FilmItemMainPage } from "../../../../types/uiTypes";
import FilmListSkeleton from "./FilmListSkeleton";
import RightArrow from "../../../../assets/icon/rightArrow";
import LeftArrow from "../../../../assets/icon/leftArrow";
import notFoundImage from "../../../../assets/img/imageNotFound2.png";

interface FilmListProps {
  filmList: FilmItemMainPage[];
  isFetching: boolean;
  setCurrentImage: (curentImage: string) => void;
  removeCurrentImage: () => void;
  currentImage: string;
  filmsCount: number;
  nextPage: () => void;
  prevPage: () => void;
  pageNumber: number;
}
const FilmList = ({
  filmList,
  isFetching,
  setCurrentImage,
  removeCurrentImage,
  currentImage,
  filmsCount,
  nextPage,
  prevPage,
  pageNumber,
}: FilmListProps) => {

  return (
    <div className={filmList.length !== 0 ? styles.mainFilmListContainer : styles.mainFilmListContainerHide}>
      <div className={styles.imageContainer}>
        <img
          alt="filmImage"
          src={currentImage !=="N/A" ? currentImage : notFoundImage}
          className={currentImage ? styles.imageFilmOn : styles.imageFilmOff}
        />
      </div>
      <div className={styles.filmListContainer}>
        <div
          className={
            (filmList && filmList.length !== 0) || isFetching
              ? styles.filmListShow
              : styles.filmListRemove
          }
        >
          {isFetching ? (
            <FilmListSkeleton />
          ) : filmList ? (
            filmList.map((el: FilmItemMainPage, index: number) => {
              return (
                <div
                  key={el.imdbID}
                  className={styles.filmInfoContainer}
                  onMouseEnter={() => {
                    setCurrentImage(el.Poster);
                  }}
                  onMouseLeave={() => {
                    removeCurrentImage();
                  }}
                >
                  <Link to={`/film/${el.imdbID}`}>
                    <div className={styles.filmName}>
                      <p title={el.Title}>
                        {el.Title.length > 30
                          ? `${el.Title.substring(0, 25)}...`
                          : el.Title}
                      </p>
                    </div>
                  </Link>
                  <div className={styles.addInfo}>
                    <p>{el.Year}</p>

                    <p>{el.Type}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        {filmsCount > 0 ? (
          <div className={styles.navContainer}>
            <p className={styles.pageInfo}>All items : {filmsCount}</p>
            <div className={styles.navArrowContainer}>
              <button className={styles.arrow} onClick={prevPage}>
                <LeftArrow width={50} height={50} />
                <p>{`${(pageNumber + 0.1) * 10 - 10}-${
                  Math.abs((pageNumber + 0.1) * 10 - 10 - filmsCount) >= 10
                    ? pageNumber * 10
                    : filmsCount
                }`}</p>
              </button>
              <button
                className={styles.arrow}
                onClick={() => {
                  nextPage();
                }}
              >
                <p>
                  {filmsCount > 10 && filmsCount - pageNumber * 10 > 0
                    ? filmsCount - pageNumber * 10
                    : 0}
                </p>
                <RightArrow width={50} height={50} />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FilmList;
