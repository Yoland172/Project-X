import axios from "axios";


const OMBD_URL = 'https://www.omdbapi.com/?apikey=8b47da7b&';

export const  getFilms =  async (name:string, page:number)  => {
     const result = await axios.get(`${OMBD_URL}s=${name}&page=${page}`);
     console.log(result.data);
     return result.data
   
    }

export const getFilmInfo = async(id:string) => {
     const results = await axios.get(`${OMBD_URL}i=${id}`);
     console.log(results.data);
     return results.data;
}