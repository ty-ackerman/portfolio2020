import React from "react";
import styled from "styled-components";

const InputName = styled.div`
  p {
    color: #797979;
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const JournalInputName = ({ inputName }) => {
  return (
    <InputName>
      <p>{inputName}</p>
    </InputName>
  );
};

JournalInputName.defaultProps = {
  inputName: "Input Name",
};

export default JournalInputName;
