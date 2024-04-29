import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getAuth } from "firebase/auth";
import { BiHandicap } from "react-icons/bi";
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
function Singnup() {
  return (
    <div className="min-h-screen grid place-content-center">
      <button type="button" className="btn-secondary">
        <faGogle onClick={handleSignup} className="h-5 w-5" /> Singup
      </button>
    </div>
  );
}

export default Singnup;
