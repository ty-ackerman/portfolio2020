import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  &.fullWidth {
    flex-grow: 2;
  }
  input {
    min-width: 0;
    width: 100%;
    border: 1px solid black;
    font-size: 12px;
    padding: 0 10px;
    -webkit-appearance: none
    -webkit-border-radius: 0px;
    border-radius: 0;
    -moz-appearance: none;
    appearance: none;
  }
`;

const TextField = ({ autoFocus, handleChange, className, ...rest }) => {
  return (
    <TextBox className={className}>
      <input
        autoFocus={autoFocus}
        type="text"
        {...rest}
        onChange={(e) => handleChange(e.target.value)}
      />
    </TextBox>
  );
};

TextField.defaultProps = {
  placeholder: "Enter Text",
  handleChange: (e) => console.log("Default onChange", e.target),
};

export default TextField;
