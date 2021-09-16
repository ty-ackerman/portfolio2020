import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Fade from "../../Components/Fade";
import PostTitle from "../../Components/PostTitle";
import JournalButton from "../Components/JournalButton";
import JournalImageUpload from "./JournalImageUpload";
import JournalPeople from "./JournalPeople";
// import JournalLocation from "./JournalLocation";
// import JournalLocationSimplified from "./JournalLocationSimplified";
import JournalPrompt from "./JournalPrompt";
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

  const [selectedPeople, setSelectedPeople] = useState([]);

  useEffect(() => {
    setJournalType(type);
  }, [type]);

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
        <JournalPrompt
          question="Title"
          placeholder="Enter a captivating title"
        />
        <JournalPrompt question="Location" placeholder="Where u at doe" />
        <FlexContainer className="flex-container">
          <JournalImageUpload />
          {/* <JournalLocation /> */}
          <JournalTags />
        </FlexContainer>
        <JournalPrompt
          className="sentence"
          question="What were you doing?"
          textArea
        />
        <JournalPrompt
          className="sentence"
          question="Anything worth remembering?"
          textArea
        />
        <JournalPeople
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
        />
        <JournalPrompt
          className="sentence"
          question="Additional notes?"
          textArea
        />
        {/*  This is where I will be adding error handling (i.e. change "All Done" to "Fill in missing information") */}
        <SubmitContainer />
      </div>
    </Fade>
  );
}
