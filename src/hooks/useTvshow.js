import { useEffect } from "react";
import {addTvshow  } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant"
import { useSelector } from "react-redux";

const useTvShow=()=>{
    const dispatch = useDispatch();
    
    const trandingMovies = useSelector(store=>store.movies.tvShows)

    const getTvshow = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv', API_OPTIONS)
       const json = await data.json();
       console.log(json.results)
       dispatch(addTvshow(json.results))
    }

    useEffect(()=>{
     !trandingMovies &&   getTvshow()
    },[])
}

export default useTvShow