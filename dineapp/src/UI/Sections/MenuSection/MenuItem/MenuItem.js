import React from "react";
import classes from './MenuItem.module.css'

const menuItem =(props)=> {

    let imgClasses=[];

    imgClasses.push(classes.Img);

    if(props.name==='dessert'){
        imgClasses.push(classes.DessertImg);
    }
    else if(props.name==='sphagetti'){
        imgClasses.push(classes.SphagettiImg);
    }
    else if(props.name==='salad'){
        imgClasses.push(classes.SaladImg);
    }

    return(
    <div className={classes.Item}>
        <div style={{margin: '0'}} className="row">
            <div style={{padding: '0'}} className={classes.ImageCol}>
                <span className={classes.Line}></span>
                <div className={imgClasses.join(' ')}></div>
            </div>
            <div style={{padding: '0'}} className="col-sm">
                <div className={classes.DishText}>
                    <p className={classes.DishHeader}>{props.header}</p>
                    <p className={classes.DishSummary}>{props.children}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default menuItem;