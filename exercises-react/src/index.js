import React from "react";
import ReactDOM from "react-dom";

const element = document.getElementById("root");
const jsx = <h1>Hello React!</h1>;
ReactDOM.render(jsx, element);

/* 
THESE CODE RUNS WELL! TOO!!

const element = document.getElementById("root");

ReactDOM.render(
   <ul>
     <li>Are you a HTML converted in JS?</li>
     <li>Yes, I'm too!</li>
   </ul>,
element);
*/
