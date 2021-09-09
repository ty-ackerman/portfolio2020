import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  flex-grow: 2;
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

const JournalTextField = ({ autoFocus, handleChange, ...rest }) => {
  return (
    <TextBox>
      <input autoFocus type="text" {...rest} onChange={handleChange} />
    </TextBox>
  );
};

JournalTextField.defaultProps = {
  placeholder: "Enter Text",
  handleChange: (e) => console.log("Default onChange", e.target),
};

export default JournalTextField;