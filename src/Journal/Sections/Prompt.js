import React from "react";
import InputName from "../components/InputName";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";

const Prompt = ({ question, placeholder, textArea, handleChange, ...rest }) => {
  return (
    <div>
      <InputName inputName={question} {...rest} />
      {textArea ? (
        <TextArea placeholder={placeholder} handleChange={handleChange} />
      ) : (
        <TextField placeholder={placeholder} handleChange={handleChange} />
      )}
    </div>
  );
};

Prompt.defaultProps = {
  question: "What is your deepest darkest secret?",
  placeholder: "Enter response here...",
  textArea: false,
};

export default Prompt;
