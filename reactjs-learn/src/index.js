import React from "react";
import ReactDom from "react-dom";
import jackImage from './images/jack.png';



// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>
        Welcome to 30 Day of React
      </h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript</h3>
      <p>Longngow</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// UserCard Component
const UserCard = () => (
  <div className="user-card">
    <img src={jackImage} />
    <h2>Jack j97</h2>
  </div>
)

const TechList = () => {
  const techs = ["React", "Angular", "Vue"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main component

const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Component React JS</p>
      <ul>
        <TechList />
      </ul>
      <UserCard/>
    </div>
  </main>
)

const Footer = () =>(
  <footer>
    <div className="footer-wrapper">
      <p>Copyright by Longngow</p>
    </div>
  </footer>
)

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer/>
  </div>
)



const rootElement = document.getElementById("root");
ReactDom.render(<App/>, rootElement);
