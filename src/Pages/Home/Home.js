import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import BusinesSumary from './BusinesSumary';
import ClientRivew from './ClientRivew';
import Faq from './Faq';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <BusinesSumary></BusinesSumary>
            <ClientRivew></ClientRivew>
            {/* <Contact></Contact> */}
            <Faq></Faq>
            <Info></Info>
            <Footer></Footer>

        </div>
    );
};

export default Home;