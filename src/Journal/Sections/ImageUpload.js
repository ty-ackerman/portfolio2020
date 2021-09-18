import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import InputName from "../Components/InputName";
import TextField from "../Components/TextField";

const ImageSubmitContainer = styled.div`
  width: 48%;
  .urlInput {
    display: flex;
    margin-bottom: 5px;
    input[type="button"] {
      margin-left: 2px;
    }
  }
  .imgContainer {
    width: 100%;
    img {
      max-width: 100%;
    }
  }
`;

const ImageUpload = ({ picture, handleChange }) => {
  return (
    <ImageSubmitContainer>
      <InputName inputName="Picture Upload" />
      <div className="urlInput">
        <TextField
          placeholder="Paste Image URL"
          handleChange={handleChange}
          value={picture}
          className="fullWidth"
        />
        {picture && (
          <Button
            value="Clear"
            className="tags"
            bgColor="#dadada"
            handleClick={() => handleChange("")}
          />
        )}
      </div>
      {picture && (
        <div className="imgContainer">
          <img src={picture} alt="" />
        </div>
      )}
    </ImageSubmitContainer>
  );
};

export default ImageUpload;
