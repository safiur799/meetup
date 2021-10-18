import React from "react";

function LoginForm() {
  return (
    <div>
      <input type="email" placeholder="enter email" />
      <br />
      <input
        style={{ margin: "1rem" }}
        type="password"
        placeholder="enter password"
      />
      <br />
      <button>submit</button>
    </div>
  );
}

export default LoginForm;
