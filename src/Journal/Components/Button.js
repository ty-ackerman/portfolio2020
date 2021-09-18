import React from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
  input[type="button"] {
    text-transform: capitalize;
    transition: 0.15s all linear;
    background-color: white;
    color: black;
    border: 1px solid black;
    -webkit-appearance: none
    -webkit-border-radius: 0px;
    border-radius: 0;
    flex-grow: 0;
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
    &.tags {
      font-size: 12px;
      padding: 0px 10px;
    }
  }
`;

const Button = ({ handleClick, bgColor, color, borderColor, ...rest }) => {
  return (
    <BtnContainer className="btnContainer">
      <input
        style={{ backgroundColor: bgColor, color, borderColor }}
        type="button"
        onClick={handleClick}
        {...rest}
      />
    </BtnContainer>
  );
};

Button.defaultProps = {
  handleClick: () => console.log("Clicked"),
  value: "Default",
  name: "default",
};

export default Button;
