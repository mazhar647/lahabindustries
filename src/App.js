import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";

function App() {
    return ( <
        div >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = "/home"
        component = { Home }
        />{" "} <
        Route exact path = "/contact"
        component = { Contact }
        />{" "} <
        Redirect to = "/home" /
        > { " " } <
        /Switch>{" "} <
        /div>
    );
}

export default App;