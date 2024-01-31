import { useParams } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import FilmInfo from "./FilmInfo";
import { getFilmInfo } from "../../../api/requests";
import FilmInfoSkeleton from "./FilmInfoSkeleton";
import { FilmItemInfoPage } from "../../../api/types";

const FilmInfoContainer = () => {
  const { id } = useParams();

  const [filmInfo, setFilmInfo] = useState<FilmItemInfoPage>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (id) {
      setIsFetching(true);
      getFilmInfo(id).then((res) => {
        setIsFetching(false);
        if (res.Response === "True") {
          setFilmInfo(res);
        }
      });
    }
  }, [id]);

<<<<<<< HEAD
  useEffect(() => {
    if (filmInfo?.Title) {
      document.title = `Project X - ${filmInfo?.Title}`;
    }

    return () => {
      document.title = `Project X - ${filmInfo?.Title}`;
    };
  }, [filmInfo]);

  return (
    <>
      {!isFetching ? (
        <>
          <FilmInfo filmInfo={filmInfo} />
        </>
      ) : (
        <FilmInfoSkeleton />
      )}
    </>
  );
=======
  return isFetching ? <FilmInfoSkeleton /> : <FilmInfo filmInfo={filmInfo} />
>>>>>>> d187e513d9b08d9f5e81910fa4374b7c1757a107
};

export default FilmInfoContainer;
