import React from "react";
import './hero.styles.css'

export default function Hero(props) {
    const {children} = props;
    return <h1 className="hero">{children}</h1>;
}