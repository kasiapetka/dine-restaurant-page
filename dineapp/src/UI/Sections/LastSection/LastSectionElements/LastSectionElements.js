import React from "react";
import classes from "./LastSectionElements.module.css";
import Paragraph from "./Paragraphs/Paragraph";
import ImageBar from "../../../ImageBar/ImageBar";

const lastSectionElements = (props) => (
    <div style={{margin: '0'}} className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
            <div className={props.imgClasses.join(' ')}></div>
            <ImageBar/>
        </div>
        <div className="col-md-5">
            <div className={classes.SecondaryButtons}>
                <div className="row">
                    {props.secondaryButtons}
                </div>
            </div>

            <div style={{margin: '0'}} className="row">
                <Paragraph buttonActive={props.buttonActive}/>
            </div>

            <div style={{margin: '0'}} className="row">
                <button className={classes.OrderButton}>book a table</button>
            </div>
            <div className={classes.PrimaryButtons}>
                <div className="row">
                    {props.primaryButtons}
                </div>
            </div>
        </div>

        <div className="col-md-1"></div>
    </div>
);

export default lastSectionElements;