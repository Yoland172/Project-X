import styles from "./filmInfo.module.scss";
import SectionLine from "../../ui/SectionLine/SectionLine";
import { FilmItemInfo } from "../../../api/types";
import imdbIcon from "../../../assets/img/IMDB_Logo_2016.svg.png";
import metacritic from "../../../assets/img/Metacritic.svg";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

interface FilmInfoProps {
  filmInfo?: FilmItemInfo;
  theme:string
}

const FilmInfo = ({ filmInfo, theme }: FilmInfoProps) => {
  const {t} = useTranslation();
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mainInfoContainer}>
          <div className={styles.filmPosterContainer}>
            {filmInfo?.Poster && filmInfo.Poster !== "N/A" ? (
              <img src={filmInfo.Poster} alt="FilmPoster" />
            ) : (
              <></>
            )}
          </div>
          <div className={styles.ratingList}>
            <div className={classNames(styles.ratingItem, theme && styles[theme])}>
              <h1>IMDB Rating:</h1>
              <div className={classNames(styles.iconWithRating, theme && styles[theme])}>
                <p>
                  {filmInfo?.imdbRating} / <span>10</span>
                </p>
                <img src={imdbIcon} alt="IMDB" />
              </div>
            </div>
            {filmInfo?.Metascore && filmInfo?.Metascore !== "N/A" ? (
              <div className={classNames(styles.ratingItem, theme && styles[theme])}>
                <h1>METACRITIC:</h1>
                <div className={classNames(styles.iconWithRating, theme && styles[theme])}>
                  <p>
                    {filmInfo?.Metascore} / <span>100</span>
                  </p>
                  <img src={metacritic} alt="Metacritic" />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <h1 className={classNames(styles.title, theme && styles[theme])}>{filmInfo?.Title}</h1>
          <div className={classNames(styles.addInfo, theme && styles[theme])}>
            {filmInfo?.Runtime && filmInfo?.Runtime !== "N/A" && (
              <div className={styles.runtime}>
                <p>
                  {t("filmInfoPage.filmMainInfo.runtime")}:<span>{filmInfo?.Runtime}</span>
                </p>
              </div>
            )}

            {filmInfo?.Genre && filmInfo?.Genre !== "N/A" ? (
              <div className={styles.genre}>
                <p>
                {t("filmInfoPage.filmMainInfo.genre")}:<span>{filmInfo?.Genre}</span>
                </p>
              </div>
            ) : (
              <></>
            )}
            {filmInfo?.Year && filmInfo?.Year !== "N/A" ? (
              <div className={styles.year}>
                <p>
                {t("filmInfoPage.filmMainInfo.year")}:<span>{filmInfo?.Year}</span>
                </p>
              </div>
            ) : (
              <></>
            )}
            {filmInfo?.Type && filmInfo?.Type !== "N/A" && (
              <div className={styles.type}>
                <p>
                {t("filmInfoPage.filmMainInfo.type")}:<span>{filmInfo?.Type}</span>
                </p>
              </div>
            )}
            {filmInfo?.Plot && filmInfo?.Plot !== "N/A" && (
              <div className={styles.plot}>
                <p>{filmInfo?.Plot}</p>
              </div>
            )}
          </div>
        </div>

        {/* wraper */}
        <SectionLine />

        {filmInfo?.Awards && filmInfo?.Awards !== "N/A" ? (
          <div className={classNames(styles.oscarAwardsContainer,theme && styles[theme])}>
            <div className={styles.oscarAwards}></div>
            <div></div>
            <div className={styles.awardsText}>
              <p>{filmInfo?.Awards}</p>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className={classNames(styles.addInfoContainer, theme && styles[theme])}>
          {filmInfo?.Director && filmInfo?.Director !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <h1>{filmInfo?.Director}</h1>
                <p>{t("filmInfoPage.addInfo.director")}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {filmInfo?.Rated && filmInfo?.Rated !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <h1>{filmInfo?.Rated}</h1>
                <p>{t("filmInfoPage.addInfo.rated")}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {filmInfo?.Language && filmInfo?.Language !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <h1>{filmInfo?.Language}</h1>
                <p>{t("filmInfoPage.addInfo.language")}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {filmInfo?.Released && filmInfo?.Released !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <h1>{filmInfo?.Released}</h1>
                <p>{t("filmInfoPage.addInfo.released")}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {filmInfo?.Country && filmInfo?.Country !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <h1>{filmInfo?.Country}</h1>
                <p>{t("filmInfoPage.addInfo.country")}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {filmInfo?.BoxOffice && filmInfo?.BoxOffice !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>{" "}
              {/*make check for all blocks */}
              <div className={styles.textContainer}>
                <h1>{filmInfo?.BoxOffice}</h1>
                <p>{t("filmInfoPage.addInfo.boxOffice")}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default FilmInfo;
