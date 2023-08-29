import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { FaSearchengin } from "react-icons/fa";
import { setAIsearch } from "../store/AIsearch";
import { BG_IMAGE } from "../constants/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <header className="absolute top-0 left-0 flex items-center justify-between z-50 pr-20 w-full">
      <img src={BG_IMAGE} alt="logo" className="sh-15 sm:h-20" />
      <button
        type="button"
        onClick={() => dispatch(setAIsearch())}
        className=" flex justify-center items-center gap-2 px-3 py-2 w-[20%] bg-gray-500 hover:bg-white rounded-lg"
      >
        <FaSearchengin />
        Search
      </button>
      {user && (
        <div className="flex items-center gap-10">
          <span className="text-white font-bold text-xl">
            {user?.name}
            <span
              onClick={() => {
                setShowPopup(true);
              }}
              className="shadow-white shadow-md rounded-full cursor-pointer ml-5"
            >
              🔴
            </span>
          </span>

          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            alt="profile"
            className="h-10 rounded-full"
          />
        </div>
      )}

      {showPopup && (
        <div
          onClick={handlePopupClose}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white rounded-xl p-5"
          >
            <p className="text-xl font-semibold mb-5">
              Are you sure you want to Log Out?
            </p>
            <div className="flex justify-between px-3">
              <button
                className="bg-[#e50914] text-white font-semibold py-1 px-2 rounded-md "
                type="button"
                onClick={handlePopupClose}
              >
                Cancel
              </button>
              <button
                className="bg-[#e50914] text-white font-semibold py-1 px-2 rounded-md "
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;