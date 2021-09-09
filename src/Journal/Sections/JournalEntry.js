import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Fade from "../../Components/Fade";
import PostTitle from "../../Components/PostTitle";
import JournalButton from "../Components/JournalButton";
import JournalImageUpload from "./JournalImageUpload";
import JournalLocation from "./JournalLocation";
import JournalPrompts from "./JournalPrompts";
import JournalTags from "./JournalTags";

import SubmitContainer from "./SubmitContainer";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function JournalEntry() {
  const type = useParams();

  const [, setJournalType] = useState("");
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    setJournalType(type);
  }, [type]);

  navigator.geolocation.getCurrentPosition((res) => console.log(res.coords));

  const toggleReminder = () => {
    setReminder(!reminder);
  };

  return (
    <Fade show>
      <div className="section">
        <PostTitle title="Journal Entry" subtitle="Confirm Details Below" />
        <JournalButton
          style={{ marginTop: "15px" }}
          value={!reminder ? "set reminder" : "cancel reminder"}
          handleClick={toggleReminder}
          className={`${reminder && "active"} small`}
        />
        <FlexContainer className="flex-container">
          <JournalImageUpload />
          <JournalLocation />
        </FlexContainer>
        <JournalPrompts />
        <JournalPrompts />
        <JournalTags />
        {/*  This is where I will be adding error handling (i.e. change "All Done" to "Fill in missing information") */}
        <SubmitContainer />
      </div>
    </Fade>
  );
}
