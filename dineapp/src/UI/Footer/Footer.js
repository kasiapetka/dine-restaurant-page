import React from "react";
import classes from "./Footer.module.css"


const footer = () => {
    const rowClassNames = "row " + classes.Row;
    const jumbotronClassNames = "row "+classes.Jumbotron;
    return (
        <React.Fragment>
            <div style={{margin: '0'}} className={jumbotronClassNames}>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <h2 className={classes.Title}>Ready to make a reservation?</h2>
                </div>
                <div className="col-md-4">
                    <button className={classes.OrderButton}>book a table</button>
                </div>
                <div className="col-md-1"></div>

            </div>
            <div style={{margin: '0'}} className={rowClassNames}>
                <div className="col-md-1"></div>
                <div className="col-md-5">

                </div>
                <div className="col-md-5">

                </div>
                <div className="col-md-1"></div>

            </div>
        </React.Fragment>
    );
};

export default footer;