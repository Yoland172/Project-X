import { Interface } from "readline";
import styles from "./search.module.scss";
import { useEffect } from "react";
import FilmItem from "../../types/types";
import FilmListSkeleton from "./FilmListSkeleton";

interface FilmListProps {
filmList:FilmItem[],
isFetching:boolean,
setCurrentImage:(curentImage:string) => void,
removeCurrentImage: () => void,
currentImage:string,
}
const FilmList = ({filmList, isFetching,setCurrentImage,removeCurrentImage ,currentImage}:FilmListProps) => {

    
    return (
        <div className={styles.mainFilmListContainer}>
            <div className={styles.imageContainer}>
               <img src={`${currentImage}`} className={currentImage ? styles.imageFilmOn : styles.imageFilmOff}/>
            </div>
            <div className={filmList && filmList.length != 0 ?  styles.filmListContainerShow: styles.filmListContainerOff}>
                {isFetching ?
            <FilmListSkeleton/>
            : 
                  filmList ? filmList.map((el:FilmItem, index:number) => {
                    return (<div key={el.imdbID} className={styles.filmInfoContainer} onMouseEnter={()=>{setCurrentImage(el.Poster)}} onMouseLeave={() => {removeCurrentImage()}}>
                        <div className={styles.filmName}>
                            <p>{el.Title}</p>
                        </div>
                        <div className={styles.addInfo}>
    
                            <p>{el.Year}</p>
    
                            <p>{el.Type}</p>
    
                        </div>
                    </div>)
                }) : <></> }
            </div>
        </div>
    )


}

export default FilmList;