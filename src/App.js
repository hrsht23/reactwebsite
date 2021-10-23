import React from "react";
import Clubs from "./Clubs";
import Home from "./Home";
import Players from "./Players";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "./index.css";
// import "./Home.css";

import {Switch , Route}  from "react-router-dom";

const App = () => {
 return (

    <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clubs" component={Clubs} />

        <Route exact path="/players" component={Players} />
        <Route exact path="/contact" component={Contact} />

        </Switch>
    </>
    );
 }
    
    


export default App;

