import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";


const VideoTittle =({tittle,overview})=>{
    return(
        <div className=" w-screen aspect-video  pt-[15%] md:px-24 px-6  absolute bg-gradient-to-r from-black">
          <h1 className=" md:text-4xl text-xl font-bold text-white  ">{tittle}</h1>
          <p className=" hidden lg:inline-block py-6 text-base w-1/4 text-white">{overview}</p>
          <div className=" flex gap-4 items-center my-3 mb-2 md:m-0 ">
            <button className=" bg-white text-black md:px-7 px-3  py-2  font-bold text-xl   hover:bg-opacity-50 rounded-md gap-2  flex  items-center ">

            <FaPlay size={20}/> <span>Play</span> 
            </button>
            <button className=" hidden md:flex items-center gap-2 text-white font-bold text-xl  bg-gray-600 bg-opacity-70 hover:bg-opacity-80  px-5 py-2  rounded-md ">
               <IoMdInformationCircleOutline size={30}/>  More info
            </button>
          </div>
        </div>
    )
}

export default VideoTittle;