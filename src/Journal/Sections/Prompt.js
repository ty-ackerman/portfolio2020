import React, { useState } from "react";
import Button from "../components/Button";
import InputName from "../components/InputName";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import styled from "styled-components";
import { useParams } from "react-router";

const BtnContainer = styled.div`
  display: flex;
  & > * {
    margin-right: 5px;
  }
`;

const Prompt = ({
  question,
  placeholder,
  type,
  handleChange,
  questionObj,
  value,
  ...rest
}) => {
  const { _id } = useParams();
  const [active, setActive] = useState(
    _id && typeof value === "boolean" ? value : "default"
  );

  if (type === "text") {
    return (
      <div>
        <InputName inputName={question} {...rest} />
        <TextArea
          placeholder={placeholder}
          handleChange={handleChange}
          questionObj={questionObj}
          value={value}
        />
      </div>
    );
  } else if (type === "boolean") {
    return (
      <div>
        <InputName inputName={question} {...rest} />
        <BtnContainer>
          <Button
            className={`tags ${active === true && "active"}`} // so it can start unselected
            value="Yes"
            onClick={() => {
              setActive(true);
              handleChange(true, questionObj);
            }}
          />
          <Button
            className={`tags ${!active && "active"}`}
            value="No"
            onClick={() => {
              setActive(false);
              handleChange(false, questionObj);
            }}
          />
        </BtnContainer>
      </div>
    );
  } else {
    return (
      <div>
        <InputName inputName={question} {...rest} />
        <TextField
          placeholder={placeholder}
          handleChange={handleChange}
          value={value}
        />
      </div>
    );
  }
};

Prompt.defaultProps = {
  question: "What is your deepest darkest secret?",
  placeholder: "Enter response here...",
  textArea: false,
};

export default Prompt;
