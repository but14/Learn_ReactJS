import React from "react";
import ReactDom from "react-dom";

// JSX element, header

const welcome = "Welcome to 30 Days Of react";
const title = "Getting started React";
const subtitle = "JavaScript Libraby";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Aug 08, 2024";

// Jsx element, header

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName};
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;

const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1820;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;

const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old.
  </p>
);

// JSX main

const techs = ["HTML", "CSS", "Javascript"];
const techsFormatted = techs.map((techs) => <li>{techs}</li>);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{""}
        <strong>
          <em>React. js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
    </div>
  </main>
);

const copyRight = "Copyright 2020";

// JSX element, footer

const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
ReactDom.render(app, rootElement); // render the JSX element to the DOM
