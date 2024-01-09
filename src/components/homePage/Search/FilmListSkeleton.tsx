import Skeleton from "../../../Helpers/Skeleton/Skeleton";
import styles from "./search.module.scss";

const FilmListSkeleton = () => {

let styleProps = {
    display: "grid", 
    rowGap: "18px"

} 

    return (<div style={styleProps}><div className={styles.filmInfoContainer} >
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    <div className={styles.filmInfoContainer}>
        <div className={styles.filmName}>
            <Skeleton width="25vw" height="3vh" borderRadius="15px"/>
        </div>
        <div className={styles.addInfo}>
            <Skeleton width="5vh" height="3vh" borderRadius="10px"/>

        </div>
    </div>
    </div>)

}

export default FilmListSkeleton;