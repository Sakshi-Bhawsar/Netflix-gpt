import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import VideoBackGround from "./VideoBackGround";

const MainContainer =()=>{
    const movies = useSelector(store =>store.movies?.nowPlayingMovies)
    if(movies==null) return;
    const mainMovie =  movies[0]
    const {original_title,overview,id} = mainMovie
    console.log(mainMovie)
    return(
        <div className=" md:pt-0 pt-[35%] bg-black" >
              <VideoTittle tittle={original_title} overview={overview}/>  
              <VideoBackGround movieId={id}/>
        </div>
    )
}
export default MainContainer;