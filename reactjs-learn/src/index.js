import React from "react";
import ReactDOM from 'react-dom'

const jsxElement = <h1>This is a JSX element</h1>



const headerStyles = {
  backgroundColor: 'lightblue',
  fontFamily: 'Arial',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header style={headerStyles}>
    <h1>Welcome to 30 days of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Park Hoang Long</p>
    <small>
      Aug 08, 2024
    </small>
  </header>
)

const mainStyles = {
  backgroundColor: '#F3F0F5',
}

// JSX element, main
const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)


const footerStyles = {
  backgroundColor: '#61DBFB',
}

const footer = (
  <footer   style={footerStyles}>
    <p>Copyright By Ngow</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);