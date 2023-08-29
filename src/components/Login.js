import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { PROFILE_URL } from "../constants/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSign] = useState(true);
  const [error, setError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setSign(!signIn);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const displayName = name.current.value;
          updateProfile(auth.currentUser, {
            displayName: displayName,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                name: displayName,
              })
            );
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <section className="relative flex justify-center items-center bg-black bg-opacity-50  h-screen">
      <Header />

      <img
        className="absolute -z-30 h-full w-full object-cover"
        src={PROFILE_URL}
        alt="background"
      />
      <form
        onSubmit={onSubmit}
        className="bg-black bg-opacity-90 w-full md:w-[400px]  text-white flex flex-col  gap-10 p-10"
      >
        <h1 className="font-bold text-3xl">{signIn ? "Sign IN" : "Sign Up"}</h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 bg-gray-500 opacity-80 rounded-sm"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 bg-gray-500 opacity-80 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder=" Password"
          className="p-4 bg-gray-500 opacity-80 rounded-sm"
        />
        <button className="w-full bg-[#e50914] hover:bg-opacity-70 py-4 rounded-md mt-10 font-semibold text-lg">
          {signIn ? "Sign In" : "Sign up"}
        </button>
        {error && <p className="text-red-600">{error}</p>}

        <div className="flex items-center justify-between px-3 -mt-8 ">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="cursor-pointer checked:bg-gray-500"
            />{" "}
            <span className="text-gray-600 hover:text-white cursor-pointer">
              Remeber me
            </span>
          </div>
          <span className="text-gray-600 hover:text-white cursor-pointer">
            Need Help?
          </span>
        </div>
        <p className="text-lg text-gray-500">
          New to Netflix?{" "}
          <span
            onClick={toggleForm}
            className="ml-3 text-white hover:text-gray-400 cursor-pointer hover:border-b-2"
          >
            {signIn ? "SignUp Now" : "Sign In"}
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
