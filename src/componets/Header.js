import { useSelector } from "react-redux";
import logo from "../assets/Netflix_Logo_PMS.png"
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = ()=>{
const navigate = useNavigate()
const dispatch = useDispatch()

const user = useSelector((store)=>store.user)
const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  const handleSignOut =()=>{
    
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email ,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")

        }
      });
       
      // unsubscribe when component unmounts
      return ()=>unsubscribe()
},[])

const handleGptsearchClick =()=>{
  // Toggle gpt search 
  dispatch(toggleGptSearchView())
}

const handleLanguageChange =(e)=>{
   dispatch(changeLanguage(e.target.value))
}
    return(
        <div className=" absolute flex justify-between w-screen z-10 px-8 py-2 bg-gradient-to-b from-black ">
          <img className=" w-44 " src={logo} alt="logo" ></img>
          {
            user &&  
             <div className=" flex items-center gap-2">
             {
              showGptSearch &&   <select className=" p-2 bg-gray-500 text-white m-2" onChange={handleLanguageChange}>
             {
              SUPPORTED_LANGUAGE.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
             }
             </select>
             }
           
             <button className=" py-2 px-4 mx-4 bg-purple-800 my-2 rounded "
             onClick={handleGptsearchClick}
             > {showGptSearch ?"Home" :"GPT search"} </button>

          <img   className=" w-10 h-10" src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt=""/>
          <button className=" font-bold text-white" onClick={handleSignOut}>Sign Out</button>
          </div>
          }
        
        </div>
    )
}
export default Header;