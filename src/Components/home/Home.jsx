import React from 'react';
import "./home.css";
// eslint-disable-next-line
import ME from "..//..//assets/avatar-1.svg";
import HeaderSocials from './Header.Socials';
import ScrollDown from './ScrollDown';
const Home = () =>{
    return(
        <section className="home container" id="home">
            <div className="intro">
                <img src="" alt="" className="home__img"/>
                <h1 className="home_name">Vedant Bisht</h1>
                <span className="home__education">I' am a Full-Stack-Developer
                </span>

                <HeaderSocials/>

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown/>

            </div>


        </section>
    );
};

export default Home