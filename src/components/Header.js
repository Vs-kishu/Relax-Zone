import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setAIsearch } from '../store/AIsearch';
import { addUser, removeUser } from '../store/userSlice';
import { auth } from '../utils/firebase';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showPopup, setShowPopup] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
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
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
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
    <header className="absolute top-0 left-0 flex items-center justify-between z-50 pr-5 md:pr-20 w-full">
      <Link to="/">
        {' '}
        <img src="/relax-logo.png" alt="logo" className=" h-14 sm:h-20" />
      </Link>
      {user && (
        <button
          type="button"
          onClick={() => dispatch(setAIsearch())}
          className=" flex justify-center items-center gap-2 px-3 py-1 sm:py-2 w-[100px] md:w-[20%] bg-gray-500 hover:bg-white rounded-lg"
        >
          <FaSearchengin />
          Search
        </button>
      )}
      {user && (
        <div className="flex items-center gap-10">
          <span className="text-white max-md:hidden font-bold text-xl">
            {user?.name}
            <span
              onClick={() => {
                setShowPopup(true);
              }}
              className="shadow-white shadow-md rounded-full max-md:hidden cursor-pointer ml-5"
            >
              🔴
            </span>
          </span>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            alt="profile"
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="h-5 sm:h-10 rounded-full cursor-pointer"
          />
          {isMenuOpen && (
            <div className="absolute right-10 p-2 rounded-md top-16   bg-white">
              <ul className="font-semibold ">
                <li className="hover:bg-slate-400 p-2 cursor-pointer rounded-lg">
                  {user?.name}
                </li>
                <li
                  className="hover:bg-slate-400 p-2 cursor-pointer rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
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
