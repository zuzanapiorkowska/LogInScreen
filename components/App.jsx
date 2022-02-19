import React from "react";
import { Form } from "./Form";

let isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <Form />
//     );
//   }
// }
let userIsRegistered = false;

export function App() {
  return <div className="container">
      {isLoggedIn?<h1>Hello</h1>:<Form isRegistered={userIsRegistered}/>}
  </div>;
}
