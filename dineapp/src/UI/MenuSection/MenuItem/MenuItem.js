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
    <div fluid="true" className={classes.Item}>
        <div fluid="true" style={{margin: '0'}} className="row">
            <div fluid="true" style={{padding: '0'}} className="col-md-4">
                <div className={imgClasses.join(' ')}></div>
            </div>
            <div fluid="true" className="col-md-1"></div>
            <div fluid="true" className="col-md-7">
                dfsdfsd
            </div>
        </div>
    </div>
    );
};

export default menuItem;