import React from "react";
import Button from "../components/Button";
import styled from "styled-components";

const SbmtCntr = styled.div`
  margin-top: 30px;
  input {
    margin: 0 10px;
  }
  .prompt {
    display: flex;
    color: #797979;
    justify-content: center;
    margin-bottom: 5px;
    font-size: 14px;
  }
  .btnContainer {
    display: flex;
    justify-content: center;
  }
`;

const SubmitContainer = ({ handleSubmit }) => {
  return (
    <SbmtCntr>
      <div className="prompt">All Done?</div>
      <div className="btnContainer">
        <Button value="cancel" />
        <Button value="submit" bgColor="#dadada" onClick={handleSubmit} />
      </div>
    </SbmtCntr>
  );
};

export default SubmitContainer;
