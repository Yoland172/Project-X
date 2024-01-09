import { useParams } from "react-router-dom";
import FilmInfo from "./FilmInfo"
import { useEffect, useState } from "react";
import { getFilmInfo } from "../../../api/requests";
import { FilmItemInfoPage } from "../../../types/types";
import FilmInfoSkeleton from "./FilmInfoSkeleton";

const FilmInfoContainer = () => {

    const filmId = useParams().id;

    const [filmInfo, setFilmInfo] = useState<FilmItemInfoPage>();
    const [isFetching, setIsFetching] = useState<boolean>(false);


    useEffect(() => {
        if (filmId) {
            setIsFetching(true);
            getFilmInfo(filmId).then(res => {

                setIsFetching(false);
                if (res.Response === "True") {
                    setFilmInfo(res);
                }
            })
        }
    }, []);


    return (
        <>
            {
                !isFetching ?
                <>
                    <FilmInfo filmInfo={filmInfo} />
                    
                    </>
                    :  <FilmInfoSkeleton/>
            }
        </>

    )
}


export default FilmInfoContainer;