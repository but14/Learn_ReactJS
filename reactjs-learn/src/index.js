import React from "react";
import ReactDom from "react-dom";
import firstImg from "./images/html.png";

const title = "Front End Technologies";

/* const logo = (
  <div>
    <img src={firstImg} alt="Logo" />
  </div>
) */

const main = (
  <div className="main-wrapper">
    <h1>{title}</h1>
    <div className="images">
      <img src={firstImg} alt="HTML" />
      <img src={firstImg} alt="HTML" />
      <img src={firstImg} alt="HTML" />
    </div>

    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <div className="form">
      <input className="input" type="text" placeholder="First Name" />
      <input className="input" type="text" placeholder="Last Name" />
      <input className="input" type="text" placeholder="Email" />
    </div>

    <button className="btn">Submit</button>

  </div>
);

const rootElement = document.getElementById("root");
ReactDom.render(main, rootElement);
