import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import InputName from "../components/InputName";
import TextField from "../components/TextField";
import Tag from "./Tag";

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
  .errorContainer {
    color: red;
    font-size: 12px;
    font-style: italic;
    span {
      text-transform: capitalize;
    }
  }
`;

const Tags = ({
  allTags,
  setAllTags,
  selectedTags,
  setSelectedTags,
  scenario_id,
}) => {
  const [addTag, setAddTag] = useState(false); // Toggles the button/input to add tag
  const [newTag, setNewTag] = useState("");
  const [error, setError] = useState(false);

  const handleNewTag = () => {
    if (newTag !== "") {
      if (!allTags.includes(newTag.toLowerCase())) {
        setError(false);
        setAllTags([...allTags, newTag.toLowerCase()]);
        setSelectedTags([
          ...selectedTags,
          { name: newTag.toLowerCase(), scenario_id },
        ]);
        setNewTag("");
      } else {
        setError(true);
      }
      setAddTag(false);
    }
  };

  return (
    <TagContainer>
      <InputName inputName="tags" />
      <div className="tagBtnContainer">
        {allTags.map((tag, key) => (
          <Tag
            key={key}
            tag={tag}
            setTags={setSelectedTags}
            tags={selectedTags}
            scenario_id={scenario_id}
            initalActive={
              selectedTags.filter((selectedTag) => selectedTag.name === tag)
                .length
            }
          />
        ))}
      </div>
      {addTag ? (
        <div className="addTagContainer">
          <TextField
            autoFocus
            placeholder="Enter New Tag"
            handleChange={(e) => {
              setError(false);
              setNewTag(e);
            }}
            value={newTag}
          />
          <Button
            value="Add"
            className="tags"
            bgColor="#dadada"
            handleClick={handleNewTag}
          />
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
      {error && (
        <div className="errorContainer">
          "<span>{newTag}</span>" already exists, idiot. Learn to read, and
          select another.
        </div>
      )}
    </TagContainer>
  );
};

export default Tags;
