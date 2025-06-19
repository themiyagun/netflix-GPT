import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate data

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //update user
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
             
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message)
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      ///sign in

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src={BG_URL}
          alt="bgImage"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 bg-black bg-opacity-80 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-3/12 text-white"
      >
        <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        <br />

        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-2 w-full bg-gray-400 bg-opacity-50"
            ></input>
            <br />
            <br />
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 w-full bg-gray-400 bg-opacity-50"
        ></input>
        <br />
        <br />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className=" p-2 w-full  bg-gray-400 bg-opacity-50"
        ></input>
        <br />
        <br />
        <button className="w-full bg-red-600 py-2" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <br />
        <br />
        <p className="text-xs text-red-600">{errorMessage}</p>
        <div
          className="text-xs cursor-pointer font-bold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "Are You New to NFlixClone?? Sign Up"
            : "Alredy User!! Sign In"}
        </div>
      </form>
    </div>
  );
};

export default Login;
