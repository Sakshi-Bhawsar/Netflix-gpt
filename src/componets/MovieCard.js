import { IMG_CDN_URL } from "../utils/constant"

const MovieCard =({posterPath})=>{
    if(!posterPath) return null;
    return(
        <div className=" w-36 md:w-48 pr-4 mb-2 ">
            <img alt="Movie card" src={IMG_CDN_URL+posterPath}></img>
        </div>
    )
}
export default MovieCard