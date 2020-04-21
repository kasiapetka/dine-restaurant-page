import React from 'react';
import Jumbotron from "../UI/Jumbotron/Jumbotron";
import FirstSection from '../UI/HeaderSections/FirstSection/FirstSection'
import SecondSection from "../UI/HeaderSections/SecondSection/SecondSection";
import MenuSection from "../UI/MenuSection/MenuSection";

const layout = () => {
    return (
        <React.Fragment>
            <header>
                <Jumbotron/>
            </header>
            <section>
                <FirstSection/>
            </section>
            <section>
                <SecondSection/>
            </section>

            <section>
                <MenuSection/>
            </section>
        </React.Fragment>
    );
};
export default layout;