import React from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
  input[type="button"] {
    text-transform: capitalize;
    transition: 0.15s all linear;
    background-color: white;
    color: black;
    border: 1px solid black;

    @media (min-width: 1301px) {
      padding: 5px 40px;
    }
    @media (max-width: 1300px) {
      padding: 5px 30px;
    }
    @media (max-width: 1150px) {
      padding: 5px 20px;
    }
    @media (max-width: 1000px) {
      padding: 5px 30px;
    }
    @media (max-width: 420px) {
      padding: 5px 20px;
    }
    &.active {
      background-color: #000;
      border: 1px solid #000;
      color: white;
    }
    &.fullSize {
      width: 100%;
    }
    &.small {
      padding: 0px 10px;
    }
  }
`;

const JournalButton = ({ handleClick, ...rest }) => {
  return (
    <BtnContainer className="btnContainer">
      <input type="button" onClick={handleClick} {...rest} />
    </BtnContainer>
  );
};

JournalButton.defaultProps = {
  handleClick: () => console.log("Clicked"),
  value: "Default",
  name: "default",
};

export default JournalButton;
