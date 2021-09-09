import React, { useState } from "react";
import styled from "styled-components";
import JournalButton from "../Components/JournalButton";
import JournalInputName from "../Components/JournalInputName";
import JournalTextField from "../Components/JournalTextField";
import JournalTag from "./JournalTag";

const TagContainer = styled.div`
  .tagBtnContainer {
    display: flex;
    flex-flow: row wrap;
    input {
      margin-right: 5px;
    }
  }
  .addTagContainer {
    display: flex;
    & > * {
      margin-right: 2px;
    }
  }
`;

const JournalTags = ({ tags }) => {
  const [addTag, setAddTag] = useState(false); // Toggles the button/input to add tag

  return (
    <TagContainer>
      <JournalInputName inputName="tags" />
      <div className="tagBtnContainer">
        {tags.map((tag) => (
          <JournalTag key={tag.id} tag={tag} />
        ))}
      </div>
      {addTag ? (
        <div className="addTagContainer">
          <JournalTextField autoFocus placeholder="Enter New Tag" />
          <JournalButton value="Add" className="tags" bgColor="#dadada" />
        </div>
      ) : (
        <JournalButton
          value={"add tag"}
          handleClick={() => setAddTag(true)}
          bgColor="#dadada"
          className="tags"
          // handleClick to submit on enter keydown
        />
      )}
    </TagContainer>
  );
};

JournalTags.defaultProps = {
  tags: [
    {
      name: "Cooking",
      id: 123,
      // Frequency will link activity type with tags to display the most frequently occuring tags first
      frequency: {
        basic: 1,
        cooking: 19,
      },
    },
    {
      name: "Golfing",
      id: 1233,
      frequency: {
        basic: 1,
        exercise: 13,
      },
    },
    {
      name: "Working Out",
      id: 12333,
      frequency: {
        basic: 1,
        exercise: 10,
      },
    },
    {
      name: "Chilling",
      id: 13323,
      frequency: {
        basic: 1,
      },
    },
    {
      name: "Audiobook",
      id: 123423,
      frequency: {
        basic: 1,
        knitting: 19,
      },
    },
    {
      name: "Driving",
      id: 123423423,
      frequency: {
        basic: 1,
      },
    },
  ],
};

export default JournalTags;
