import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer =()=>{
    const movies = useSelector((store)=>store.movies)
    
    return(
        movies.nowPlayingMovies &&(
            <div className="    bg-black w-screen">
            <div className=" mt-0  md:-mt-52 relative z-20 pl-4 md:pl-12">
            <MovieList  tittle={"Now  Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList  tittle={"Tranding"} movies={movies.trandingMovies}/>
            <MovieList  tittle={"Popular"} movies={movies.PopularMovies}/>
            <MovieList  tittle={"Upcoming Movies"} movies={movies.upcomingMovies}/>
            <MovieList  tittle={"TV Shows"} movies={movies.tvShows}/>

            </div>
       </div>
        )
      
    )
}

export default SecondaryContainer