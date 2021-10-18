import React from "react";
import LoginForm from "../Components/LoginForm";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
function Home() {
  const isAuth = useSelector((state) => state.isAuth);
  console.log(isAuth);
  if (!isAuth) {
    return (
      <div>
        <Redirect path="/" />
      </div>
    );
  }
  return (
    <div>
    </div>
  );
}

export default Home;
