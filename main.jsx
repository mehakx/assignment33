import { useState } from "react";
import { createRoot } from "react-dom/client";

import pic1 from "../Json images/pic1.png"



window.addEventListener("load", () => {
  let root = createRoot(document.getElementById("root"));
  root.render(<App />);
});

function App() {
  // Your app code goes here...
  return <p>(This JSX code becomes the contents of your component) <img src={pic1}></img></p>;

} 
