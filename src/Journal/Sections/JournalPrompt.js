import React from "react";
import JournalInputName from "../Components/JournalInputName";
import JournalTextArea from "../Components/JournalTextArea";
import JournalTextField from "../Components/JournalTextField";

const JournalPrompt = ({ question, placeholder, textArea, ...rest }) => {
  return (
    <div>
      <JournalInputName inputName={question} {...rest} />
      {textArea ? (
        <JournalTextArea placeholder={placeholder} />
      ) : (
        <JournalTextField placeholder={placeholder} />
      )}
    </div>
  );
};

JournalPrompt.defaultProps = {
  question: "What is your deepest darkest secret?",
  placeholder: "Enter response here...",
  textArea: false,
};

export default JournalPrompt;
