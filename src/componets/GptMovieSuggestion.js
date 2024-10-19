import { useSelector } from "react-redux"
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {

  const gpt = useSelector(store => store.gpt.gptMovies)
  if (!gpt) return null;

  return (
    <div className=" bg-black  w-screen opacity-90 p-6 mt-8   ">
    <h1 className=" text-white font-bold text-2xl p-4"> {gpt.length==0 ?"Movie Not Found":"Search Result"} </h1>
       <div className="   grid  grid-cols-2  md:grid-cols-3 lg:grid-cols-4  p-6 ">
       
        {
          gpt.map((movie)=>
           <MovieCard key={movie.id} posterPath={movie.poster_path} />
           )
        }
      </div>
    </div>

  )
}

export default GptMovieSuggestion