import React, {useState, useRef, useEffect} from "react";
import classes from './LastSection.module.css'


require('intersection-observer');

const LastSection = () => {

    // const [isVisible, setVisible] = useState(false);
    // const ref = useRef();
    //
    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => setVisible(entry.isIntersecting));
    //     });
    //     observer.observe(ref.current);
    // }, []);
    //
    // const shapeClasses = [];
    // shapeClasses.push(classes.Shape);
    //
    // if (isVisible) {
    //     shapeClasses.push(classes.Visible);
    // }

    return (
        <React.Fragment>
            <div style={{margin: '0'}} className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <div className={classes.Img}></div>
                </div>
                <div className="col-md-5">

                    <div className={classes.Text}>
                        <h2>Family Gathering</h2>
                        <p>We love catering for entire families. So please bring everyone along
                        for a special meal with your loved ones. We'll provide a memorable experience for all.</p>
                    </div>
                </div>

                <div className="col-md-1"></div>
            </div>

        </React.Fragment>
    );
};
export default LastSection;