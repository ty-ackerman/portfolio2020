import React from "react";
import styled from "styled-components";

const TextAreaContainer = styled.div`
    textarea {
        resize: vertical;
        width: 100%;
        -webkit-appearance: none
        -webkit-border-radius: 0px;
        border-radius: 0;
        -moz-appearance: none;
        appearance: none;
        font-size: 12px;
        padding: 0 10px;
        border: 1px solid black;
    }

    textarea:focus {
        outline: none;
    }
`;

const TextArea = ({ handleChange, questionObj, rows, ...rest }) => {
  return (
    <TextAreaContainer>
      <textarea
        onChange={(e) => handleChange(e.target.value, questionObj)}
        style={{ resize: rows > 1 ? "vertical" : "none" }}
        {...rest}
      />
    </TextAreaContainer>
  );
};

TextArea.defaultProps = {
  placeholder: "Enter Text",
  handleChange: (e) => console.log(e.target.value),
};

export default TextArea;
