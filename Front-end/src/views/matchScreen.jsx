import React from "react";
// import { useEffect, useState } from "react";
import '../styles/matchScreen.css'
import arrow from '../assets/left-icon-placeholder.svg'
import { useNavigate } from 'react-router';
import CupidList from '../components/CupidList'


const MatchScreen = () =>{
    const navigate = useNavigate();
    const handleHome = () => {
        // Lógica para el botón de inicio de sesión
        navigate (`/home`)
    };
    
    
    // console.log(playlist);
    return (
        <main className="Card">  
            <div className="header">
                <div className="Backgr-degrade"/>
                <div className="top-bar">
                    <img src={arrow} srcSet="" onClick={handleHome}/> 
                    <h1> Cupido musical </h1>
                </div>
            </div>

            <CupidList/>

            
        </main>              
    );   
};

export default MatchScreen;