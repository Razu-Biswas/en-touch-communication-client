import React from 'react';
// import AddService from '../../Admin/AddServices/AddServices';


import Reviews from '../../Review/Reviews/Reviews';

import Footer from '../../Shared/Footer/Footer';
import Clients from '../Clients/Clients';
import ExtraFeature from '../ExtraFeature/ExtraFeature';
import Header from '../Header/Header.js';
import PremiumFeature from '../PermiumFeature/PremiumFeature';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


import SpecialFeature from '../SpcialFeature/SpecialFeature';


const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <AddService></AddService> */}
            <ServiceDetails/>
            {/* <Services></Services> */}
            <ExtraFeature></ExtraFeature>
            <SpecialFeature></SpecialFeature>
            <PremiumFeature></PremiumFeature>
           
            <Reviews></Reviews>
            {/* <Clients></Clients> */}
            <Footer></Footer>
            
        </div>
    );
};

export default Home;