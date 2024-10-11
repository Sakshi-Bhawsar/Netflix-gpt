import { useState } from "react";
import Header from "./Header";

const Login =()=>{
    const[isSignInForm,setIsSignInForm ] = useState(true)
    const toggleSignInForm =()=>{
           setIsSignInForm(!isSignInForm)
    }
    return(
        <div>
           <Header/>
           <div className=" absolute ">
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
           </div>
          <form className="   absolute p-12 text-white  bg-black  bg-opacity-80 w-3/12  my-36 mx-auto right-0 left-0  ">
            <h1 className=" font-bold text-3xl py-4 "> {isSignInForm ? "Sign In" :"Sign up"}</h1>
            {
                !isSignInForm && <input type="text" placeholder="Full Name" className=" p-4 my-4 w-full bg-gray-700"></input>

            }
            <input type="text" placeholder="Email Address" className=" p-4 my-4 w-full bg-gray-700"></input>
           
            <input type=" password" placeholder="Password" className=" p-4 my-4 w-full bg-gray-700"></input>
            <button className=" p-4 my-6 bg-red-600 w-full rounded-lg"> {isSignInForm ? "Sign In" :"Sign up"}</button>
            <p className="py-4 cursor-pointer  font-semibold text-lg" onClick={toggleSignInForm}>{isSignInForm ?" New to netflix? sign  Up Now":"Already registered? Sign In Now"}</p>
           </form>
        </div>
    )
}
export default Login;