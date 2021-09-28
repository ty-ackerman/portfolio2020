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

const TextArea = ({ handleChange, questionObj, ...rest }) => {
  return (
    <TextAreaContainer>
      <textarea
        {...rest}
        onChange={(e) => handleChange(e.target.value, questionObj)}
      />
    </TextAreaContainer>
  );
};

TextArea.defaultProps = {
  placeholder: "Enter Text",
  handleChange: (e) => console.log(e.target.value),
};

export default TextArea;
