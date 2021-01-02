import React from "react";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import brk from "../images/bricks.png";
import bcs from "../images/black_crushed_stones.jpg";
import cb from "../images/cement_blocks.jpg";
import cem from "../images/cement.jpg";
import cemst from "../images/cement_storage.jpeg";
import cs from "../images/crush_stones.jpg";
import ms from "../images/manufactured_sand.jpg";
import sb from "../images/soil_bricks.jpg";
import rs from "../images/river_sand.jpg";
import CardContent from "./Cardcontent";

const Home = () => {
    return ( <
        div className = "mainsheet" >
        <
        div className = "container" > { " " } { /* <h1> Welcome Home! </h1> */ } { " " } <
        Carousel >
        <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { brk }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Bricks < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { bcs }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Black Crushed Stones < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { cb }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Cement Blocks < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { cem }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Cement < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { cemst }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Cement Storage < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { cs }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Crushed Stones < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { ms }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Manufactured Sand < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { sb }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > Soil Bricks < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        Carousel.Item interval = { 600 } >
        <
        img className = "d-block h-50 w-100"
        src = { rs }
        alt = "" / >
        <
        Carousel.Caption >
        <
        h3 > River Sand < /h3>{" "} <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        /Carousel>{" "} <
        br / >
        <
        div className = "center" >
        <
        h1 > Products < /h1>{" "} <
        /div>{" "} <
        CardContent / >
        <
        /div>{" "} <
        br / >
        <
        div className = "bg-dark text-white" >
        <
        div className = "container" >
        <
        span > Contact Us < /span>{" "} <
        span >
        <
        p > { " " }
        Rahman Baig Siddeshwar Nagar, 1 st Cross, Shantamma Layout 577203. { " " } <
        /p>{" "} <
        p > Ph: 7022045070 < /p>{" "} <
        /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Home;