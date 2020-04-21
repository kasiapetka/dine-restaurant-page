import React from 'react';
import Jumbotron from "../UI/Jumbotron/Jumbotron";
import FirstSection from '../UI/FirstSection/FirstSection'

const layout = () => {
    return (
        <React.Fragment>
            <header>
                <Jumbotron/>
            </header>
            <section>
                <FirstSection/>
            </section>


        </React.Fragment>
    );
};
export default layout;