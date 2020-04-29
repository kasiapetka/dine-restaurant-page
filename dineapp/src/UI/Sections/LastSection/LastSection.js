import React, {useState, useEffect} from "react";
import classes from './LastSection.module.css'
import LastSectionElements from "./LastSectionElements/LastSectionElements";

require('intersection-observer');

const LastSection = () => {

    const [buttonActive, setActive] = useState(1);
    const activeClasses = [], inactiveClasses = [];
    activeClasses.push(classes.ToggleButton);
    activeClasses.push(classes.ToggleButtonActive);
    inactiveClasses.push(classes.ToggleButton);
    const [imgClasses, setImgClasses] = useState([classes.Img, classes.ImgFamily]);

    const buttons = [
        {
            label: 'family gathering',
            id: 1,
            active: true
        },
        {
            label: 'special events',
            id: 2,
            active: false
        },
        {
            label: 'social events',
            id: 3,
            active: false
        }
    ];
    const [toggleButtons, setToggleButtons] = useState(buttons);

    useEffect(() => {
        buttons.forEach(button => {
            if (button.id === buttonActive) {
                if (buttonActive === 1)
                    setImgClasses([classes.Img, classes.ImgFamily]);
                else if (buttonActive === 2)
                    setImgClasses([classes.Img, classes.ImgSpecial]);
                else if (buttonActive === 3)
                    setImgClasses([classes.Img, classes.ImgSocial]);

                button.active = true;
            } else
                button.active = false;
        });

        setToggleButtons(buttons);
    }, [buttonActive]);

    const displayButtons = toggleButtons.map(button => {
        return <div style={{margin: '0'}} className="row">
            <div style={{padding: '0'}} className="col-2">
                {button.active ? <hr className={classes.Line}/> : <hr className={classes.LineInactive}/>}
            </div>
            <div style={{padding: '0'}} className="col-10">
                <button
                    key={button.id}
                    className={button.active ? activeClasses.join(' ') : inactiveClasses.join(' ')}
                    onClick={() => setActive(button.id)}>{button.label}</button>
            </div>
        </div>
    });

    return <LastSectionElements
        buttonActive={buttonActive}
        displayButtons={displayButtons}
        imgClasses={imgClasses}
    />;
};
export default LastSection;