import React from "react";
import classes from "./LastSectionElements.module.css";
import Paragraph from "./Paragraphs/Paragraph";

const lastSectionElements = (props) => (
    <div style={{margin: '0'}} className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
            <div className={props.imgClasses.join(' ')}></div>
        </div>
        <div className="col-md-5">

            <Paragraph buttonActive={props.buttonActive}/>

            <div style={{margin: '0'}} className="row">
                <button className={classes.OrderButton}>book a table</button>
            </div>

            <div className={classes.Buttons}>
                {props.displayButtons}
            </div>
        </div>

        <div className="col-md-1"></div>
    </div>
);

export default lastSectionElements;