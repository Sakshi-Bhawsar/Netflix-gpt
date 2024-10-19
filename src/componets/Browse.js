import Header from "./Header";
import  useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTvShow from "../hooks/useTvshow";
import useTrandingMovies from "../hooks/useTrandingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse =()=>{
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
   useNowPlayingMovies()
   usePopularMovies();
   useTvShow();
   useTrandingMovies();
   useUpcomingMovies();
   
   
    return(
        <div>
           <Header/>
           {
            showGptSearch ?
            <GptSearch/>
            :
            <>
            <MainContainer/>
            <SecondaryContainer/>
            </>
           }
         
        </div>
    )
}

export default Browse;