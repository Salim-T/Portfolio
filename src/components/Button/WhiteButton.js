import React from 'react';
import './button.css';
import { Link } from 'react-scroll';

const WhiteButton = (props) => {
    return (
        <Link className={props.className} ><button className="whiteBtn">{props.text}</button></Link>
    );
}

export default WhiteButton;
