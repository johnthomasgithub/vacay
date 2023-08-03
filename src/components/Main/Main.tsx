import React, { useEffect } from "react";
import "./Main.scss";
import styled, { keyframes } from "styled-components";
import Mainbg from "../../assets/travel-01.jpg";

interface Props {
  setShowPopUp: Function;
}
const beatAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const MainButton = styled.button`
  padding: 10px 15px;
  font-weight: 600;
  font-size: 45px;
  border-radius: 8px;
  border: none;
  background-color: black;
  opacity: 0.75;
  color: white;
  font-style: italic;
  animation: ${beatAnimation} 2s infinite;
  cursor: pointer;

  &:hover {
    animation-play-state: paused;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
    padding: 6px 15px;
  }
`;
//styings for the main CTA

const Main = (props: Props) => {
  return (
    <section
      id="main"
      className="main"
      style={{ backgroundImage: `url(${Mainbg})` }}
    >
      <div className="main__title">Travel made simple</div>
      <div className="main__button__parent">
        <MainButton onClick={() => props.setShowPopUp("Add")}>
          Create Plan
        </MainButton>
      </div>
    </section>
  );
};

export default Main;
