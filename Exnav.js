import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FaTwitter, FaPhone, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import './ExnavStyle.css'

function Exnav(props) {
  return (
    <Rect>

      <div className="main-class">
      
      <div className="sm-icons">

      <FaFacebook style={{color: 'white', fontSize: '20px'}}/>
      <FaInstagram style={{color: 'white', fontSize: '20px'}}/>
      <FaTwitter style={{color: 'white', fontSize: '20px'}}/>

      </div>

      <div className="phone-class">

      <FaPhone style={{color: 'white', fontSize: '20px'}} />

      <p className="text-class">+91 9810770128</p>

      <FaEnvelope style={{color: 'white', fontSize: '20px', marginLeft: '15px'}} />

      <p className="text-class" style={{marginRight: '15px'}}>info@rmclingo.com</p>

      </div>
      
      </div>
      
     
    </Rect>
    

  );
}

const Rect = styled.div`
  width: 100%;
  height: 55px;
  background-color: rgba(6,16,95,1);
  flex-direction: row;
  display: flex;
`;

const division = styled.div`
  display: flex;
  width: 40%;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export default Exnav;