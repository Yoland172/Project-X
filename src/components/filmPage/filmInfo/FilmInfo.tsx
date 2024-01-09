import { FilmItemInfoPage } from "../../../types/types";
import styles from './filmInfo.module.scss';
import imdbIcon from '../../../assets/icon/IMDB_Logo_2016.svg.png';
import metacritic from '../../../assets/icon/Metacritic.svg';
import SectionLine from "../../../Helpers/SectionLine/SectionLine";

interface FilmInfoProps {
    filmInfo?: FilmItemInfoPage
}

const FilmInfo = ({ filmInfo }: FilmInfoProps) => {


    return (<>
        <div className={styles.mainContainer}>
            <div className={styles.filmPosterContainer}>
                {filmInfo?.Poster ? <img src={filmInfo.Poster} /> : <></>}
                <div className={styles.ratingList}>
                    <div className={styles.ratingItem}>
                        <h1>IMDB Rating:</h1>
                        <div className={styles.iconWithRating}>
                            <p>{filmInfo?.imdbRating} / <span>10</span>
                                {/* <span className={styles.votes}>
                        {filmInfo!.imdbVotes.length > 4 ? `${filmInfo?.imdbVotes.substring(0,4)} k` : filmInfo?.imdbVotes } // add
                    </span> */}
                            </p>
                            <img src={imdbIcon} />
                        </div>
                    </div>
                    {/* <div className={styles.ratingItem}>
                        <h1>TOMATOMETR:</h1>
                        <div className={styles.iconWithRating}>
                            <p>73%</p>  <img src={tomatoIcon} />  add TOMATOMETR.........................................
                        </div>

                    </div> */}
                    {filmInfo?.Metascore != "N/A" ? <div className={styles.ratingItem}>
                        <h1>METACRITIC:</h1>
                        <div className={styles.iconWithRating}>
                            <p>{filmInfo?.Metascore} / <span>100</span></p>  <img src={metacritic} />
                        </div>

                    </div> : <></>
                    }
                </div>

            </div>
            <div className={styles.filmInfoContainer}>
                <h1 className={styles.title}>
                    {filmInfo?.Title}
                </h1>
                <div className={styles.addInfo}>
                    <div className={styles.runtime}>
                        <p>Runtime:<span>{filmInfo?.Runtime}</span></p>
                    </div>
                    <div className={styles.genre}>
                        <p>Genre:<span>{filmInfo?.Genre}</span></p>
                    </div>
                    <div className={styles.year}>
                        <p>Year:<span>{filmInfo?.Year}</span></p>
                    </div>
                    <div className={styles.type}>
                        <p>Type:<span>{filmInfo?.Type}</span></p>
                    </div>
                    <div className={styles.plot}>
                        <p>
                            {filmInfo?.Plot}
                        </p>
                    </div>
                </div>
                <SectionLine />


                {filmInfo?.Awards != "N/A" ?
                    <div className={styles.oscarAwardsContainer}>
                        <div className={styles.goldContainer}>
                        </div>
                        <div>
                        </div>
                        <div className={styles.awardsText}>
                            <p>{filmInfo?.Awards}</p>
                        </div>
                    </div>
                    : <></>
                }
                <div className={styles.addInfoContainer}>
                    <div className={styles.directorsTest}>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.textContainer}>
                            <h1>{filmInfo?.Director}</h1>
                            <p>Director</p>
                        </div>
                    </div>
                    <div className={styles.directorsTest}>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.textContainer}>
                            <h1>{filmInfo?.Rated}</h1>
                            <p>Rated</p>
                        </div>
                    </div>
                    <div className={styles.directorsTest}>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.textContainer}>
                            <h1>{filmInfo?.Language}</h1>
                            <p>Language</p>
                        </div>
                    </div>
                    <div className={styles.directorsTest}>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.textContainer}>
                            <h1>{filmInfo?.Released}</h1>
                            <p>Released</p>
                        </div>

                    </div>
                    <div className={styles.directorsTest}>
                        <div className={styles.verticalLine}></div>
                        <div className={styles.textContainer}>
                            <h1>{filmInfo?.Country}</h1>
                            <p>Country</p>
                        </div>
                    </div>
                    {filmInfo?.BoxOffice != "N/A" ?
                        <div className={styles.directorsTest}>
                            <div className={styles.verticalLine}></div>   {/*make check for all blocks */}
                            <div className={styles.textContainer}>
                                <h1>{filmInfo?.BoxOffice}</h1>
                                <p>Box Office</p>
                            </div>
                        </div>
                        : <></>

                    }
                </div>
                {/*filmInfo?.Writer != "N/A" ?
                <div className={styles.directorsTest}>
                        <h1>{filmInfo?.Writer}</h1>
                        <p>Writer</p>
                    </div>
                    : <></> */
                }

            </div>

                
        </div>
        </>
    )
}

export default FilmInfo;

