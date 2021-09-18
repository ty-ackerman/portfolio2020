import React from "react";
import styled from "styled-components";

const InputNameContainer = styled.div`
  margin-top: 10px;
  p {
    color: #797979;
    font-size: 12px;
    text-transform: capitalize;
  }
  p.sentence {
    text-transform: none;
  }
`;

const InputName = ({ inputName, className }) => {
  return (
    <InputNameContainer>
      <p className={className}>{inputName}</p>
    </InputNameContainer>
  );
};

InputName.defaultProps = {
  inputName: "Input Name",
};

export default InputName;
