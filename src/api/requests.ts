import axios from "axios";


export const  getFilms =  async (name:string, page:number)  => {
     console.log(page)
     const result = await axios.get(`${process.env.REACT_APP_OMBD_URL}s=${name}&page=${page}`);
     console.log(result.data);
     return result.data
   
    }

export const getFilmInfo = async(id:string) => {
     const results = await axios.get(`${process.env.REACT_APP_OMBD_URL}i=${id}`);
     console.log(results.data);
     return results.data;
}