import classes from "./Jumbotron.module.css";
import React from "react";

const jumbotron = () => (
    <div fluid="true" className={classes.Jumbotron}>
        <div fluid="true" style={{margin: '0'}} className="row">
            <div fluid="true" className="col-md-1"></div>

            <div fluid="true" className="col-md-5">
                <div fluid="true" className={classes.Logo}>
                    <h1>dine</h1>
                </div>

                <div fluid="true" className={classes.Title}>
                    <h1><span style={{display: 'block'}}>Exquisite dining </span> since 1994</h1>
                    <p> Experience our seasonal menu in beautiful country surroundings.
                        Eat the freshest produce from the comfort of our farmhouse.</p>
                </div>

            </div>
            <div fluid="true" className="col-md-5"></div>
        </div>
    </div>
);

export default jumbotron;