import React, { useState } from "react";
import styled from "styled-components";
import JournalButton from "../Components/JournalButton";
import JournalInputName from "../Components/JournalInputName";
import JournalTextField from "../Components/JournalTextField";

const ImageSubmitContainer = styled.div`
  .urlInput {
    display: flex;
    margin-bottom: 5px;
    input[type="text"] {
      width: 132.3px; // To Fix Later
    }
    & > *:first-child {
      margin-right: 2px;
    }
  }
  .imgContainer {
    width: 50%;
    img {
      max-width: 100%;
    }
  }
`;

const JournalImageUpload = () => {
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setImage(e.target.value);
  };

  return (
    <ImageSubmitContainer>
      <JournalInputName inputName="Picture Upload" />
      <div className="urlInput">
        <JournalTextField
          placeholder="Paste Image URL"
          handleChange={handleChange}
          value={image}
        />
        {image && (
          <JournalButton
            value="Clear"
            className="tags"
            bgColor="#dadada"
            handleClick={() => setImage("")}
          />
        )}
      </div>
      {image && (
        <div className="imgContainer">
          <img src={image} alt="" />
        </div>
      )}
    </ImageSubmitContainer>
  );
};

export default JournalImageUpload;
