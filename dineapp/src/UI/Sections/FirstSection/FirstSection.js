import React, {useState, useRef, useEffect} from "react";
import classes from './FirstSection.module.css'
import ParagraphIcon from "../../ParagraphIcon/ParagraphIcon";

require('intersection-observer');

const FirstSection = () => {

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
                <div style={{margin: '0'}} className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className={classes.Img}></div>
                    </div>
                    <div className="col-md-5">
                        <div className={classes.Icon}>
                            <ParagraphIcon/>
                        </div>
                        <div className={classes.Text}>
                            <span className={classes.Header}>
                                <span style={{display: 'block'}}>Enjoyable place</span>
                                for all the family</span>
                            <p>Our relaxed surroundings make dining with us a great experience for everyone.
                                We can even arrange a tour of the farm before your meal.</p>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <canvas className={shapeClasses.join(' ')} ref={ref}></canvas>
        </React.Fragment>
    );
};
export default FirstSection;