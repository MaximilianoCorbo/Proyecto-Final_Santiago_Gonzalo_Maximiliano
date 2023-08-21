import React from "react";
import "../styles/MatchResult.css";
import arrow from "../assets/left-icon-placeholder.svg";
import singer from "../assets/artist/1.png";
import singer2 from "../assets/artist/2.png";
import singer3 from "../assets/artist/3.png";
import singer4 from "../assets/artist/4.png";
import BottomBar from "../components/BottomBar";
import logo from "../assets/logo-small.svg"
import verified from "../assets/verified.svg"
import share from "../assets/share.svg"
import vector from "../assets/Vector.svg"
import copy from "../assets/copy.svg"
import random from "../assets/Random.svg"
import play from "../assets/play-btn.svg"

import { useNavigate } from "react-router";
// import { useEffect, useState } from "react";

const MatchResult = () => {
  const navigate = useNavigate();
  // const [profileData, setProfileData] = useState({    
  //   playlists: []
  // });

  const handleHome = () => {
    navigate(`/home`);
  };

  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //     credentials: "include",
  //   };

  //   fetch("http://localhost:3000/user/perfil", requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setProfileData(prevProfileData => ({
  //       ...prevProfileData,
  //       playlists: data.playlists
  //     }));
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching filter options:", error);
  //   });
  // }, []);

  return (
    <main className="Card">
      <div className="header">
        <div className="Backgr-degrade" />
        <div className="top-bar">
          <img src={arrow} srcSet="" onClick={handleHome} />
          <div className="titles">
            <h3> Generada del Cupido musical </h3>
            <h1>-Nombre de la playlist-</h1>
          </div>
        </div>
        <div>-</div>
      </div>

      <div className="ssinger">
        <img src={singer} className="ssinger2" />
        <img src={singer2} className="ssinger2" />
        <img src={singer3} className="ssinger3" />
        <img src={singer4} className="ssinger2" />
      </div>
      <div className="actions-bar">
        <img src={logo} alt="" /> 
        <img src={verified} alt="" />
        <img src={share} alt="" />
         -duration- 
         <img src={vector} alt="" />
      </div>
      <div>
        <img src={copy} alt="" /> Crear Copia
        <img src={random} alt="" /> 
        <img src={play} alt="" />
        </div>
      {<div className="Songs">
        mapeo de las canciones 1 -hamburger-<br></br>
        mapeo de las canciones 2 -hamburger-<br></br>
        mapeo de las canciones 3 -hamburger-<br></br>
        mapeo de las canciones 4 -hamburger-<br></br>
      </div>}

      {/* {profileData?.playlists.map((profile, index) => (
          <article className="playlistCard" key={index}>
            <div className="ssinger" >
              <img src={singer} className="ssinger2" />
              <img src={singer2} className="ssinger2" />
              <img src={singer3} className="ssinger3" />
              <img src={singer4} className="ssinger2" />
            </div>
            <h2 className="">{profile.nombre}</h2>
            <h3 className="">{profile.usuario}</h3>
          </article>
        ))}     */}
      <BottomBar />
    </main>
  );
};

export default MatchResult;
