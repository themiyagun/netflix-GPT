import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORT_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const [viewDropDown, setViewDropDown] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleDropDown = () => {
    setViewDropDown(!viewDropDown);
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      {/* <img className="w-40" src={LOGO} alt="logo"></img> */}
      <h1 className="text-5xl font-extrabold text-red-700">NFlixClone</h1>

      {user && (
        <div className="p-2 flex items-center">
          {gptSearch && (
            <select
              className="mr-2 p-2 bg-black text-white bg-opacity-50"
              onChange={handleChangeLanguage}
            >
              {SUPPORT_LANGUAGE.map((lang) => (
                <option
                  key={lang.identifier}
                  className=""
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-purple-800 text-white mr-4"
            onClick={handleGptSearchClick}
          >
           {gptSearch ? "Home Page" : "GPT Search"} 
          </button>
          <div className="relative">
            <img
              className="h-10 cursor-pointer rounded-full"
              src={user?.photoURL}
              alt="usericon"
              onClick={handleDropDown}
            ></img>
            {viewDropDown && (
              <div className="absolute top-12 right-0 p-2 w-20 bg-white text-black text-xs font-bold rounded shadow-lg z-50">
                <div className="w-full py-1 cursor-pointer">
                  {user.displayName}
                </div>
                <hr></hr>
                <div
                  className="w-full py-1 cursor-pointer"
                  onClick={handleSignOut}
                >
                  Sign Out
                </div>
              </div>
            )}
          </div>

          <div className="text-white shadow-sm font-bold text-xs capitalize cursor-pointer">
            {/* {user.displayName} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
