import React from 'react';
import Home from './components/pages/Home';
import Question from './components/pages/Question';
import Result from './components/pages/Result';
import Navbar from './components/inc/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return React.createElement(
   // Non-JSX version with wrapper div
function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Router,
      null,
      React.createElement(Navbar),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: "/", element: React.createElement(Home) }),
        React.createElement(Route, { path: "/question", element: React.createElement(Question) }),
        React.createElement(Route, { path: "/result", element: React.createElement(Result) })
      )
    )
  );
}
  );
}

export default App;
