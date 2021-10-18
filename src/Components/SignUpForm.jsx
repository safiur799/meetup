import React from "react";

function SignUpForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="enter name" />
        <input type="number" placeholder="enter age" />
        <input type="email" placeholder="enter mail" />
        <input type="password" placeholder="enter password" />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
