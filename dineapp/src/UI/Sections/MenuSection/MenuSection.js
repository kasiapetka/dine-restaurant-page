import React from "react";
import classes from './MenuSection.module.css'
import MenuItem from "./MenuItem/MenuItem";
import ParagraphIcon from "../../ParagraphIcon/ParagraphIcon";

const menuSection = () => {
    const rowClassNames = "row "+classes.Row;
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
                                <span style={{display: 'block'}}>A few highlights</span>
                                from our menu.</span>
                            <p>We cater for all dietary requirements, but here's a glimpse at some
                                of out diner's favourites. Our menu is revamped every season.</p>
                        </div>
                    </div>
                    <div className="col-md-5">

                        <div className={classes.MenuItems}>
                            <MenuItem name='salad' header="Salmon Fillet Salad">
                                Our locally sourced salmon served in a refreshing
                                buckwheat summer salad.
                            </MenuItem>
                            <MenuItem name='sphagetti' header="Gourmet Spicy Pasta">
                                Our prime beef served to Your taste with delicious spicy
                                pasta.
                            </MenuItem>
                            <MenuItem name='dessert' header="Coffee Mousse Tiramisu">
                                Creamy and light tiramisu with coffee mousse combined
                                with dark chocolate shaving.
                            </MenuItem>
                        </div>
                    </div>
                    <div className="col-md-1"></div>

                </div>
        </React.Fragment>
    );
};

export default menuSection;