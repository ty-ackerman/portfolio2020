import React from "react";
import JournalButton from "../Components/JournalButton";
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

const SubmitContainer = () => {
  return (
    <SbmtCntr>
      <div className="prompt">All Done?</div>
      <div className="btnContainer">
        <JournalButton value="cancel" />
        <JournalButton value="submit" bgColor="#dadada" />
      </div>
    </SbmtCntr>
  );
};

export default SubmitContainer;
