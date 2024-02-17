import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FilmInfo from "./FilmInfo";
import { getFilmInfo } from "../../../api/requests";
import FilmInfoSkeleton from "./FilmInfoSkeleton";
import { FilmItemInfo } from "../../../api/types";
import ThemeContext from "../../../lib/contexts/ThemeContext";

const FilmInfoContainer = () => {
  const { id } = useParams();

  const [filmInfo, setFilmInfo] = useState<FilmItemInfo>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const {theme} = useContext(ThemeContext);

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
          <FilmInfo filmInfo={filmInfo} theme={theme}/>
        </>
      ) : (
        <FilmInfoSkeleton />
      )}
    </>
  );
};

export default FilmInfoContainer;
