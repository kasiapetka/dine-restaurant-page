import React from "react";
import classes from './MenuSection.module.css'
import MenuItem from "./MenuItem/MenuItem";
import ParagraphIcon from "../ParagraphIcon/ParagraphIcon";

const menuSection = () => {
    const rowClassNames = "row "+classes.Row;
    return (
        <React.Fragment>
                <div fluid="true" style={{margin: '0'}} className={rowClassNames}>
                    <div fluid="true" className="col-md-1"></div>
                    <div fluid="true" className="col-md-5">
                        <div className={classes.Icon}>
                            <ParagraphIcon/>
                        </div>
                        <div fluid="true" className={classes.Text}>
                            <h2><span style={{display: 'block'}}>A few highlights</span>from our menu.</h2>
                            <p>We cater for all dietary requirements, but here's a glimpse at some
                                of out diner's favourites. Our menu is revamped every season.</p>
                        </div>
                    </div>
                    <div fluid="true" className="col-md-5">

                        <div className={classes.MenuItems}>
                            <MenuItem name='salad'/>
                            <MenuItem name='sphagetti'/>
                            <MenuItem name='dessert'/>
                        </div>

                    </div>
                    <div fluid="true" className="col-md-1"></div>

                </div>
        </React.Fragment>
    );
};

export default menuSection;