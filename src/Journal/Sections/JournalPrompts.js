import React from "react";
import JournalInputName from "../Components/JournalInputName";
import JournalTextArea from "../Components/JournalTextArea";

const JournalPrompts = () => {
  return (
    <div>
      <JournalInputName inputName="What is your deepest darkest secret?"/>
      <JournalTextArea placeholder="Enter response here..." />
    </div>

  )
  
  
};

export default JournalPrompts;
