import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import InputName from "../Components/InputName";
import TextField from "../Components/TextField";
import Tag from "./Tag";

const TagContainer = styled.div`
  // width: 48%;
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

const Tags = ({ tags, setTags }) => {
  const [allTags, setAllTags] = useState([]);
  const [addTag, setAddTag] = useState(false); // Toggles the button/input to add tag

  useEffect(() => {
    setAllTags([
      {
        name: "Cooking",
        id: 123,
        posts: [],
      },
      {
        name: "Golfing",
        id: 1233,
        posts: [],
      },
      {
        name: "Working Out",
        id: 12333,
        posts: [],
      },
      {
        name: "Chilling",
        id: 13323,
        posts: [],
      },
      {
        name: "Audiobook",
        id: 123423,
        posts: [],
      },
      {
        name: "Driving",
        id: 123423423,
        posts: [],
      },
    ]);
  }, []);

  return (
    <TagContainer>
      <InputName inputName="tags" />
      <div className="tagBtnContainer">
        {allTags.map((tag) => (
          <Tag key={tag.id} tag={tag} setTags={setTags} tags={tags} />
        ))}
      </div>
      {addTag ? (
        <div className="addTagContainer">
          <TextField autoFocus placeholder="Enter New Tag" />
          <Button value="Add" className="tags" bgColor="#dadada" />
        </div>
      ) : (
        <Button
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

export default Tags;
