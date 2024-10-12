import { useSelector } from "react-redux";
import logo from "../assets/Netflix_Logo_PMS.png"
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
const navigate = useNavigate()
const user = useSelector((store)=>store.user)
  const handleSignOut =()=>{
    
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }

    return(
        <div className=" absolute flex justify-between w-screen z-10 px-8 py-2 bg-gradient-to-b from-black">
          <img className=" w-44 " src={logo} alt="logo" ></img>
          {
            user &&  
             <div className=" flex items-center gap-2">
          <img   className=" w-10 h-10" src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt=""/>
          <button className=" font-bold text-white" onClick={handleSignOut}>Sign Out</button>
          </div>
          }
        
        </div>
    )
}
export default Header;