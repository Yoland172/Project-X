import axios from "axios";

export const getFilms = async (name: string, page: number) => {
  const result = await axios.get(
    `${process.env.REACT_APP_OMBD_URL}s=${name}&page=${page}`
  );
  return result.data;
};

export const getFilmInfo = async (id: string) => {
  const results = await axios.get(`${process.env.REACT_APP_OMBD_URL}i=${id}`);
  return results.data;
};
