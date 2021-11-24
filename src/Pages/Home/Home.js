import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Navigation from '../Sheard/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Contact from './Conctact/Contact';
import ContactUs from './ContactUs/ContactUs';
import Doctors from './Doctors/Doctors';
import Feature from './Feature/Feature';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Contact />
            <Services />
            <Feature />
            <AppointmentBanner />
            <Doctors />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;