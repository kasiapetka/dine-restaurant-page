import React, {useState, useRef, useEffect} from "react";
import classes from './FirstSection.module.css'

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
                <div fluid="true" style={{margin: '0'}} className="row">
                    <div fluid="true" className="col-md-1"></div>
                    <div fluid="true" className="col-md-5">
                        <div className={classes.Img}></div>
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
        </React.Fragment>
    );
};
export default FirstSection;