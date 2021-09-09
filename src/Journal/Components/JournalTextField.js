import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  input {
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

const JournalTextField = ({ autoFocus, ...rest }) => {
  return (
    <TextBox>
      <input autoFocus type="text" {...rest}/>
    </TextBox>
  );
};

JournalTextField.defaultProps = {
  placeholder: "Enter Text"
}

export default JournalTextField;
