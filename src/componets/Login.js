import { useRef, useState } from "react";
import Header from "./Header";
import Checkvalidation from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constant";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    const email = useRef(null); //useRef create a refrence
    const password = useRef(null)
    const name = useRef(null)
    const dispatch = useDispatch()


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        //validate the form data
        const message = Checkvalidation(email.current.value, password.current.value)
        setErrorMsg(message)
        if (message) return;


        //signIn/signup
        if (!isSignInForm) {
            // signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMsg(error.message)
                    });
                    console.log(user)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    setErrorMsg(errorCode + "-" + errorMessage)
                });

        }
        else {


            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage)

                });
        }


    }
    return (
        <div>
            <Header />
            <div className=" absolute ">
                <img className="h-screen object-cover" src={BG_URL} srcset="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="   absolute  p-10 text-white  bg-black  bg-opacity-80  w-full md:w-4/12  my-36 mx-auto right-0 left-0  ">
                <h1 className=" font-bold text-3xl py-2 "> {isSignInForm ? "Sign In" : "Sign up"}</h1>
                {
                    !isSignInForm && <input
                        ref={name}
                        type="text" placeholder="Full Name" className=" p-4 my-4 w-full bg-gray-700 border-gray-400 border-2"></input>

                }
                <input
                    ref={email}  //give the refrence of input box
                    type="text" placeholder="Email Address" className=" p-4 my-4 w-full bg-gray-700 border-gray-400 border-2"></input>
                <input
                    ref={password}
                    type=" password" placeholder="Password" className=" p-4 my-4 w-full border-gray-400 border-2 bg-gray-700"></input>
                <p className=" text-lg font-semibold  text-red-500">{errorMsg}</p>

                <button className=" p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign up"}</button>
                <p className="py-2 cursor-pointer  font-semibold text-lg" onClick={toggleSignInForm}>{isSignInForm ? " New to netflix? sign  Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}
export default Login;