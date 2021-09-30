import React, { useState, useRef } from "react";
import InputName from "../components/InputName";
import Button from "../components/Button";
import styled from "styled-components";
import { useParams } from "react-router";

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
    background-color: white;
    color: black;
    &.hidden {
        opacity: 0;
      }
  }
  .prevTime {
    font-size: 12px;
  }
`;

const TimeEntry = ({ handleChange, time, resetTime }) => {
  const { _id } = useParams();
  const [chooseDate, setChooseDate] = useState(false);

  const handleChooseDate = (e) => {
    handleChange(new Date(e.target.value).getTime());
  };

  const handleChooseNow = () => {
    setChooseDate(false);
    handleChange(
      _id ? new Date(parseInt(resetTime)).getTime() : new Date().getTime()
    );
  };

  const formatDate = (timeState) => {
    const date = new Date(parseInt(timeState));
    const dayMonthYear = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return `${time} on ${dayMonthYear}`;
  };

  const dateInput = useRef(null);
  return (
    <TimeContainer>
      <InputName inputName="Time" />
      {_id ? <div className="prevTime">{formatDate(time)}</div> : null}
      <div className="btnContainer">
        <Button
          value={_id ? "Keep" : "Now"}
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
        placeholder="blahh"
        className={!chooseDate ? "hidden" : null}
      />
    </TimeContainer>
  );
};

export default TimeEntry;
