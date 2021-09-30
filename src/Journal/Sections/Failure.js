import Button from "../components/Button";
import React from "react";
import styled from "styled-components";
import pooEmoji from "../../assets/poo-emoji.png";
import { useHistory } from "react-router";

const FailureScreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 50px;
    left: 50px;
    padding: 100px 10px;
    text-align: center;
  }
  .imgContainer {
    filter: grayscale(50%);
    width: 50%;
  }
  h2 {
    margin: 15px 0 30px;
    line-height: 22px;
    text-transform: lowercase;
  }
`;
const Failure = () => {
  const history = useHistory();
  return (
    <FailureScreen>
      <div className="container">
        <div className="imgContainer">
          <img src={pooEmoji} alt="" />
        </div>
        <h2>Ah shit, it failed</h2>
        <Button
          value="See All Entries"
          handleClick={() => history.push("/journal")}
        />
      </div>
    </FailureScreen>
  );
};

export default Failure;
