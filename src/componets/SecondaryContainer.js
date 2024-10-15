import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer =()=>{
    const movies = useSelector((store)=>store.movies)
    
    return(
        movies.nowPlayingMovies &&(
            <div className="    bg-black w-screen">
            <div className="  -mt-48 relative z-20 pl-12">
            <MovieList  tittle={"Now  Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList  tittle={"Tranding"} movies={movies.nowPlayingMovies}/>
            <MovieList  tittle={"Popular"} movies={movies.PopularMovies}/>
            <MovieList  tittle={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
            <MovieList  tittle={"Horror"} movies={movies.nowPlayingMovies}/>

            </div>
       </div>
        )
      
    )
}

export default SecondaryContainer