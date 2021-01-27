// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Home from './pages/Home';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.js";
import InstrumentsPage from "./pages/InstrumentsPage.js";
import ContactPage from "./pages/ContactPage.js";
import DAWsPage from "./pages/DAWsPage.js";
import SpeakersPage from "./pages/SpeakersPage.js";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";



export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path="/" exact component={HomePage} />
          <Route path="/Instruments" exact component={InstrumentsPage} />
          <Route path="/DAWs" exact component={DAWsPage} />
          <Route path="/Speakers" exact component={SpeakersPage} />
          <Route path="/contacts" exact component={ContactPage} />
        </div>
        <Footer/>
      </BrowserRouter>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
