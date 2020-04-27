import React from 'react';
import Jumbotron from "../UI/Header/Jumbotron/Jumbotron";
import FirstSection from '../UI/Sections/FirstSection/FirstSection'
import SecondSection from "../UI/Sections/SecondSection/SecondSection";
import MenuSection from "../UI/Sections/MenuSection/MenuSection";
import LastSection from "../UI/Sections/LastSection/LastSection";

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
            <section>
                <LastSection/>
            </section>
        </React.Fragment>
    );
};
export default layout;