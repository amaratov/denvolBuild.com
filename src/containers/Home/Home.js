import React from 'react';
import Aux from '../../Layout/Aux';

import FrontPage from '../../components/Home/FrontPage/FrontPage';
import LeaveReview from '../../components/Home/LeaveReview/LeaveReview';
import Info from '../../components/Home/Info/Info';
import InstaFeed from '../../components/Home/InstaFeed/InstaFeed';
import Services from '../../components/Home/Services/Services';
import CustomerReviews from '../../components/Home/CustomerReviews/CustomerReviews';
import Footer from "../../components/Home/Footer/Footer";


const Home = (props) => {
    return (
        <Aux>
            <FrontPage/>
            <LeaveReview/>
            <Info/>
            <InstaFeed/>
            <Services {...props}/>
            <CustomerReviews/>
            <Footer/>
        </Aux>
    );
};

export default Home;
