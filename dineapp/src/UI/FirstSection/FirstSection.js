import React, {useState, useEffect, useRef} from "react";
import classes from './FirstSection.module.css'
import {useInView} from 'react-intersection-observer'

const FirstSection = () => {

    const [ref, inView, entry] = useInView({
        threshold: 0,
    });

    const shapeClasses =[];
    shapeClasses.push(classes.Shape);

    if(inView)
         shapeClasses.push(classes.Visible);

    console.log(shapeClasses)

    return (
        <React.Fragment>
            <div fluid="true">
                <div fluid="true" style={{margin: '0'}} className="row">
                    <div fluid="true" className="col-md-1"></div>
                    <div fluid="true" className="col-md-5">
                        <div className={classes.img}></div>
                    </div>
                    <div fluid="true" className="col-md-5">
                        <div fluid="true" className={classes.Text}>
                            <h2><span style={{display: 'block'}}>Enjoyable place</span> for all the family</h2>
                            <p>Our relaxed surroundings make dining with us a great experience for everyone.
                            We can even arrange a tour of the farm before your meal.</p>
                        </div>
                    </div>
                    <div fluid="true" className="col-md-1"></div>
                </div>

                <div className={shapeClasses.join(' ')} ref={ref}></div>
                
            </div>
        </React.Fragment>
    );
};
export default FirstSection;