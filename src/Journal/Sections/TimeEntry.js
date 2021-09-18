import React, { useState, useRef } from "react";
import InputName from "../Components/InputName";
import Button from "../Components/Button";
import styled from "styled-components";

const TimeContainer = styled.div`
  width: 48%;
  .btnContainer {
    margin-top: 1.3px;
    display: flex;
    input {
      margin-right: 5px;
    }
  }
  input[type="datetime-local"] {
    width: 100%;
    -webkit-appearance: none
    -webkit-border-radius: 0px;
    border-radius: 0;
    -moz-appearance: none;
    appearance: none;
    font-size: 12px;
    padding: 0 10px;
    border: 1px solid black;
    height: 20px;
    &.hidden {
        opacity: 0;
        //   border: 1px solid white;
        //   color: white;
      }
  }
  
`;

const TimeEntry = ({ handleChange }) => {
  const [chooseDate, setChooseDate] = useState(false);

  const handleChooseDate = (e) => {
    handleChange(new Date(e.target.value).getTime());
  };

  const handleChooseNow = () => {
    setChooseDate(false);
    handleChange(new Date().getTime());
  };

  const dateInput = useRef(null);
  return (
    <TimeContainer>
      <InputName inputName="Time" />
      <div className="btnContainer">
        <Button
          value="Now"
          className={`tags ${!chooseDate && "active"}`}
          handleClick={handleChooseNow}
        />
        <Button
          value="Other"
          className={`tags dateLong ${chooseDate && "active"}`}
          handleClick={() => {
            setChooseDate(true);
            dateInput.current.focus();
          }}
        />
      </div>
      <input
        type="datetime-local"
        ref={dateInput}
        onChange={(e) => handleChooseDate(e)}
        className={!chooseDate ? "hidden" : null}
      />
    </TimeContainer>
  );
};

export default TimeEntry;
