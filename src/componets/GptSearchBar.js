import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
// import openAi from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = ()=>{
    const configLnag = useSelector(store=>store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch()


    //  search movie in tmdb
    const searchMovieTmdb =async(movie)=>{
         const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
         
         const json = await data.json()
         return json.results;

    }

    const handleGptSearch  =async()=>{
          //  make an api call  to gpt api and get movie result

          try{
            // const gptQuery = " Act as a Movie Recommendation system and suggest some movie for the query: "+searchText.current.value+"only gives me name of 5 movies,comma seprated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";

             
            // const gptResults = await openAi.chat.completions.create({
            //   messages: [{ role: 'user', content: gptQuery }],
            //   model: 'gpt-3.5-turbo',
            // });

            // console.log(gptResults.choices?.[0].message?.content)

            //for each movie i will  search TMBD API
           const promiseArray= searchMovieTmdb(searchText.current.value)

           const tmdbResult = await promiseArray; 
           console.log(tmdbResult, "movies");
           dispatch(addGptMovieResult(tmdbResult))

          }
          catch(error ){
                console.log(error)
          }
             
          //for each movie i search tmdb api

          
          
          
        
    }
    return (
        <div className=" pt-[50%] md:pt-[15%]  flex justify-center  ">
            <form  className="  w-full  md:w-1/2 bg-black   rounded grid grid-cols-12  " onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type=" text" className=" p-4 m-4  col-span-9" placeholder={lang[configLnag].gptSearchPlaceHolder}></input>
                <button className= " m-4 col-span-3  py-2 px-4 bg-red-700 text-white rounded-lg "
                onClick={handleGptSearch}
                >{lang[configLnag].search}
                
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;
