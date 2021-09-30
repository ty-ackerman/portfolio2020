import Button from "../components/Button";
import React from "react";
import styled from "styled-components";
import fireEmoji from "../../assets/fire-emoji.png";
import { useHistory } from "react-router";

const SuccessScreen = styled.div`
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
const Success = () => {
  const history = useHistory();
  return (
    <SuccessScreen>
      <div className="container">
        <div className="imgContainer">
          <img src={fireEmoji} alt="" />
        </div>
        <h2>Hellllll ya — she posted</h2>
        <Button
          value="See All Entries"
          handleClick={() => history.push("/journal")}
        />
      </div>
    </SuccessScreen>
  );
};

export default Success;
