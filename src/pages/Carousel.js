import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousels = (props) => {
    return ( <
        div className = "container" >
        <
        h1 > Welcome Carousel Page, This is my Carousel Info < /h1>{" "} <
        Carousel >
        <
        Carousel.Item interval = { props.int } >
        <
        img className = "d-block h-50 w-100"
        src = { props.imgsrc }
        alt = "First slide" /
        >
        <
        Carousel.Caption >
        <
        h3 > { props.title } < /h3> <p> {props.subtitle} </p >
        <
        /Carousel.Caption>{" "} <
        /Carousel.Item>{" "} <
        /Carousel>{" "} <
        /div>
    );
};

export default Carousels;