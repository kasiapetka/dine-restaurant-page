import React, {useEffect, useRef, useState} from "react";
import classes from './SecondSection.module.css'
import ImageBar from "../../ImageBar/ImageBar";
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
                <div style={{margin: '0'}} className={rowClassNames}>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className={classes.Icon}>
                            <ParagraphIcon/>
                        </div>
                        <div className={classes.Text}>
                            <span className={classes.Header}>
                                <span style={{display: 'block'}}>The most locally</span>
                                sourced food.</span>
                            <p>All our ingredients come directly from our farm or local fishery.
                            So you can be sure that you're eating the freshest, most sustainable food.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className={classes.Img}></div>
                        <ImageBar/>
                    </div>
                    <div className="col-md-1"></div>

                </div>
                <canvas className={shapeClasses.join(' ')} ref={ref}></canvas>
        </React.Fragment>
    );
};
export default SecondSection;