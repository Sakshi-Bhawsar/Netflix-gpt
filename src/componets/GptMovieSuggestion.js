import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestion = ()=>{

    const gpt = useSelector(store=>store.gpt.gptMovies)
    if(!gpt) return "Movie not Found";

    return(
        <div className=" p-4 m-4 bg-black">
          <MovieList tittle="Search result" movies={gpt}></MovieList>
        </div>
    )
}

export default GptMovieSuggestion