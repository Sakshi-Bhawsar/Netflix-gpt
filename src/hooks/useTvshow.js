import { useEffect } from "react";
import {addTvshow  } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constant"

const useTvShow=()=>{
    const dispatch = useDispatch();

    const getTvshow = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv', API_OPTIONS)
       const json = await data.json();
       console.log(json.results)
       dispatch(addTvshow(json.results))
    }

    useEffect(()=>{
        getTvshow()
    },[])
}

export default useTvShow