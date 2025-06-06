import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/LK-en-20250602-TRIFECTA-perspective_0d197442-faaa-4a8f-8729-f4b7bc8340ad_large.jpg"
          alt="bgImage"
        ></img>
      </div>
      <form className="absolute p-10 bg-black bg-opacity-80 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-3/12 text-white">
        <h2>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        <br />

        {!isSignInForm && (
          <>
            <input
              type="text"
              placeholder="Name"
              className="p-2 w-full bg-gray-400 bg-opacity-50"
            ></input>
            <br />
            <br />
          </>
        )}

        <input
          type="text"
          placeholder="email"
          className="p-2 w-full bg-gray-400 bg-opacity-50"
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          className=" p-2 w-full  bg-gray-400 bg-opacity-50"
        ></input>
        <br />
        <br />
        <button className="w-full bg-red-600 py-2">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <br />
        <br />
        <div
          className="text-xs cursor-pointer font-bold"
          onClick={toggleSignInForm}
        >
            {isSignInForm ? "Are You New to NetFlix?? Sign Up" : "Alredy User!! Sign In"}
          
        </div>
      </form>
    </div>
  );
};

export default Login;
