import { useEffect } from "react";
import { addTrandingMovies} from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant"
import { useSelector } from "react-redux";

const useTrandingMovies=()=>{
    const dispatch = useDispatch();
   
    const trandingMovies = useSelector(store=>store.movies.trandingMovies)

    const getTrandingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
       const json = await data.json();
       console.log(json.results)
       dispatch(addTrandingMovies(json.results))
    }

    useEffect(()=>{
      !trandingMovies &&  getTrandingMovies()
    },[])
}

export default useTrandingMovies;