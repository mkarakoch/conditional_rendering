import React from "react";
import Login from "./Login";
import Register from "./Register";
import Text from "react"
import LoggedIn from "./LoggedIn";

var isloggedIn = true;
var currentTime = new Date(2021,10,11,8).getHours();
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {userIsRegistered ? isloggedIn ? <LoggedIn/>:<Login />:<Register />}
      {currentTime > 12 ? <h2>bravo you hard worker, work harder</h2> : null}
      {currentTime>12&&<h2>bravoyou work hard, work harder...</h2>}
    </div>
  );
}
   
export default App;
