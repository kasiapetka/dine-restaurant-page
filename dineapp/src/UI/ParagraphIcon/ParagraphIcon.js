import React from "react";
import classes from "./ParagraphIcon.module.css";

const paragraphIcon = () => (
    <React.Fragment>
        <span className={classes.Dot}>&#9702;</span>
        <span className={classes.Line}></span>
    </React.Fragment>
);

export default paragraphIcon;