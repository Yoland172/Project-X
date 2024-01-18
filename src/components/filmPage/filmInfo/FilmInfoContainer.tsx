import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
};

export default FilmInfoContainer;
