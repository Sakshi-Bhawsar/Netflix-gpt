import { useEffect } from "react";
import { addTrandingMovies} from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant"

const useTrandingMovies=()=>{
    const dispatch = useDispatch();

    const getTrandingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
       const json = await data.json();
       console.log(json.results)
       dispatch(addTrandingMovies(json.results))
    }

    useEffect(()=>{
        getTrandingMovies()
    },[])
}

export default useTrandingMovies;