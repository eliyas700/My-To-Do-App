import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    <Loading></Loading>;
  }
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error?.message}</p>
      </div>
    );
  }
  return (
    <div className="mx-auto">
      <div className="d-flex align-items-center mx-5 px-2">
        <div
          style={{ height: "1px", width: "43%" }}
          className="ms-3 bg-primary"
        ></div>
        <p className="mt-2 px-2">OR</p>
        <div
          style={{ height: "1px", width: "43%" }}
          className="bg-primary"
        ></div>
      </div>
      <div className="social-icons  ms-5">
        <p className="text-danger">{errorElement}</p>
        <button
          onClick={() => signInWithGoogle()}
          style={{ outline: "none" }}
          className="w-75 mb-3 py-2 rounded-pill  border-primary"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
