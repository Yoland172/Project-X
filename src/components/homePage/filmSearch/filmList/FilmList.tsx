import { Link } from "react-router-dom";
import styles from "./filmList.module.scss";
import { FilmItemMainPage } from "../../../../types/uiTypes";
import FilmListSkeleton from "./FilmListSkeleton";
import RightArrow from "../../../ui/icon/rightArrow";
import LeftArrow from "../../../ui/icon/leftArrow";
import notFoundImage from "../../../../assets/img/imageNotFound2.png";
import classNames from "classnames";

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
  theme:string
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
  theme
}: FilmListProps) => {
  const prevPageCountInfo = (pageNumber: number, filmsCount: number) => {
    const filmElementsCountFrom = (pageNumber + 0.1) * 10 - 10;
    const filmElementsCountTo =
      Math.abs((pageNumber + 0.1) * 10 - 10 - filmsCount) >= 10
        ? pageNumber * 10
        : filmsCount;

    return `${filmElementsCountFrom}-${filmElementsCountTo}`;
  };
  const nextPageCountInfo = (pageNumber: number, filmsCount: number) => {
    return `${
      filmsCount > 10 && filmsCount - pageNumber * 10 > 0
        ? filmsCount - pageNumber * 10
        : 0
    }`;
  };

  return (
    <div
      className={
        filmList.length !== 0
          ? styles.mainFilmListContainer
          : styles.mainFilmListContainerHide
      }
    >
      <div className={styles.imageContainer}>
        <img
          alt="filmImage"
          src={currentImage !== "N/A" ? currentImage : notFoundImage}
          className={currentImage ? styles.imageFilmOn : styles.imageFilmOff}
        />
      </div>
      <div className={styles.filmListContainer}>
        <div
          className={
            (filmList && filmList.length !== 0) || isFetching
              ? classNames(styles.filmListShow, theme && styles[theme])
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
                  className={classNames(styles.filmInfoContainer, theme && styles[theme])}
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
                        {el.Title.length > 26
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
        {filmsCount > 0 && (
          <div className={styles.navContainer}>
            <p className={classNames(styles.pageInfo, theme && styles[theme])}>All items : {filmsCount}</p>
            <div className={styles.navArrowContainer}>
              <button className={classNames(styles.arrow, theme && styles[theme])} onClick={prevPage}>
                <LeftArrow width={50} height={50} />
                <p>{prevPageCountInfo(pageNumber, filmsCount)}</p>
              </button>
              <button className={classNames(styles.arrow, theme && styles[theme])} onClick={nextPage}>
                <p>{nextPageCountInfo(pageNumber,filmsCount)}</p>
                <RightArrow width={50} height={50} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmList;
