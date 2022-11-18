import React, { Component } from "react";
import styled, { css } from "styled-components";

function Exnav(props) {
  return (
    <Rect>
      <LoremIpsum>+91 9810770128</LoremIpsum>
     
    </Rect>
    

  );
}

const Rect = styled.div`
  width: 100%;
  height: 55px;
  background-color: rgba(6,16,95,1);
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  margin-top: 16px;
  margin-left: 750px;
`;

const InfoRmclingoCom = styled.span`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
  align-self: flex-end;
  padding-top: -50px;
  margin-right: 43px;
`;

export default Exnav;