import React from 'react';
import { useState } from 'react';
import Discover from '../components/Discover';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SignUp from '../components/SignUp';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection></HeroSection>
            <InfoSection {...homeObjOne}></InfoSection>
            <Discover {...homeObjTwo}></Discover>
            <SignUp {...homeObjThree}></SignUp>
            

        </>
    );
};

export default Home;