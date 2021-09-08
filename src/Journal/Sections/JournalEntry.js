import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Fade from "../../Components/Fade";
import PostTitle from "../../Components/PostTitle";
import JournalButton from "../Components/JournalButton";
import JournalPrompts from "./JournalPrompts";

import SubmitContainer from "./SubmitContainer";

export default function JournalEntry() {
  const type = useParams();

  const [journalType, setJournalType] = useState("");
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    setJournalType(type);
  }, [type]);

  navigator.geolocation.getCurrentPosition((res) => console.log(res.coords));

  const toggleReminder = () => {
    console.log("clicked");
    setReminder(!reminder);
  };

  return (
    <Fade show>
      <div className="section">
        <PostTitle title="Journal Entry" subtitle="Confirm Details Below" />
        <JournalButton
          style={{ margin: "30px 0 15px" }}
          value={!reminder ? "set reminder" : "cancel reminder"}
          handleClick={toggleReminder}
          className={`${reminder && "active"} small`}
        />
        <JournalPrompts />
        <JournalPrompts />

        {/*  This is where I will be adding error handling (i.e. change "All Done" to "Fill in missing information") */}
        <SubmitContainer />
      </div>
    </Fade>
  );
}
