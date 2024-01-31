import styles from "./filmInfo.module.scss";
import SectionLine from "../../ui/SectionLine/SectionLine";
import { FilmItemInfoPage } from "../../../api/types";
import imdbIcon from "../../../assets/img/IMDB_Logo_2016.svg.png";
import metacritic from "../../../assets/img/Metacritic.svg";

interface FilmInfoProps {
  filmInfo?: FilmItemInfoPage;
}

const FilmInfo = ({ filmInfo }: FilmInfoProps) => {
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
            <div className={styles.ratingItem}>
              <h1>IMDB Rating:</h1>
              <div className={styles.iconWithRating}>
                <p>
                  {filmInfo?.imdbRating} / <span>10</span>
                </p>
                <img src={imdbIcon} alt="IMDB" />
              </div>
            </div>
            {filmInfo?.Metascore && filmInfo?.Metascore !== "N/A" ? (
              <div className={styles.ratingItem}>
                <h1>METACRITIC:</h1>
                <div className={styles.iconWithRating}>
                  Í
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
          <h1 className={styles.title}>{filmInfo?.Title}</h1>
          <div className={styles.addInfo}>
            {filmInfo?.Runtime && filmInfo?.Runtime !== "N/A" && (
              <div className={styles.runtime}>
                <p>
                  Runtime:<span>{filmInfo?.Runtime}</span>
                </p>
              </div>
            )}

            {filmInfo?.Genre && filmInfo?.Genre !== "N/A" ? (
              <div className={styles.genre}>
                <p>
                  Genre:<span>{filmInfo?.Genre}</span>
                </p>
              </div>
            ) : (
              <></>
            )}
            {filmInfo?.Year && filmInfo?.Year !== "N/A" ? (
              <div className={styles.year}>
                <p>
                  Year:<span>{filmInfo?.Year}</span>
                </p>
              </div>
            ) : (
              <></>
            )}
            {filmInfo?.Type && filmInfo?.Type !== "N/A" && (
              <div className={styles.type}>
                <p>
                  Type:<span>{filmInfo?.Type}</span>
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
          <div className={styles.oscarAwardsContainer}>
            <div className={styles.oscarAwards}></div>
            <div></div>
            <div className={styles.awardsText}>
              <p>{filmInfo?.Awards}</p>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className={styles.addInfoContainer}>
          {filmInfo?.Director && filmInfo?.Director !== "N/A" ? (
            <div className={styles.directorsTest}>
              <div className={styles.verticalLine}></div>
              <div className={styles.textContainer}>
                <h1>{filmInfo?.Director}</h1>
                <p>Director</p>
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
                <p>Rated</p>
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
                <p>Language</p>
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
                <p>Released</p>
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
                <p>Country</p>
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
                <p>Box Office</p>
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
