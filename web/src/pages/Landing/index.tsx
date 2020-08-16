import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/Teechr2.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing(){
    return (
        <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div className="logo-container">
                   <img src={logoImg} alt="Genus"/>
                   <h2>Uma plataforma de estudos sobre tecnologia.</h2>
               </div>
               
               <img src={landingImg} alt="Plataforma de estudo" className="hero-image"/>

                <div className="buttons-container">
                    
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar!"/>
                        Ensinar
                    </Link>

                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas. <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div> 
        </div>
    )
}

export default Landing;