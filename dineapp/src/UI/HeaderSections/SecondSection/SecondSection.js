import React, {useEffect, useRef, useState} from "react";
import classes from './SecondSection.module.css'
import ImageBar from "./ImageBar/ImageBar";
import ParagraphIcon from "../../ParagraphIcon/ParagraphIcon";
require('intersection-observer');

const SecondSection = () => {
    const rowClassNames = "row "+classes.Row;
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(ref.current);
    }, []);

    const shapeClasses = [];
    shapeClasses.push(classes.Shape);

    if (isVisible) {
        shapeClasses.push(classes.Visible);
    }

    return (
        <React.Fragment>
                <div fluid="true" style={{margin: '0'}} className={rowClassNames}>
                    <div fluid="true" className="col-md-1"></div>
                    <div fluid="true" className="col-md-5">
                        <div className={classes.Icon}>
                            <ParagraphIcon/>
                        </div>
                        <div fluid="true" className={classes.Text}>
                            <h2><span style={{display: 'block'}}>The most locally</span>sourced food.</h2>
                            <p>All our ingredients come directly from our farm or local fishery.
                            So you can be sure that you're eating the freshest, most sustainable food.</p>
                        </div>
                    </div>
                    <div fluid="true" className="col-md-5">
                        <div className={classes.Img}></div>
                        <ImageBar/>
                    </div>
                    <div fluid="true" className="col-md-1"></div>

                </div>
                <canvas className={shapeClasses.join(' ')} ref={ref}></canvas>
        </React.Fragment>
    );
};
export default SecondSection;