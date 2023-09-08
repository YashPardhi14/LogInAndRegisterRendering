import React from "react";
import Button from "./Button";
import Login from "./Login";
import Input from "./Input";
function Form(props) {
  return (
    <form className="form">
      {props.isRegistered ? (
        <>
          <Login /> <Button type="Login" />
        </>
      ) : (
        <>
          <Login />
          <Input type="password" placeholder="Confirm Password" />
          <Button type="Register" />
        </>
      )}
      {/* <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button> */}
    </form>
  );
}

export default Form;
