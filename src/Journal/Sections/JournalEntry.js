import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";

import Fade from "../../Components/Fade";
import PostTitle from "../../Components/PostTitle";
import Button from "../Components/Button";
import ImageUpload from "./ImageUpload";
import People from "./People";
import Prompt from "./Prompt";
import Tags from "./Tags";

import SubmitContainer from "./SubmitContainer";
import TimeEntry from "./TimeEntry";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Entry() {
  // Post
  const [post, setPost] = useState({});
  const [reminder, setReminder] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [time, setTime] = useState(new Date().getTime());

  const [selectedPeople, setSelectedPeople] = useState([]);

  const toggleReminder = () => {
    setReminder(!reminder);
  };

  // Tag
  const [tags, setTags] = useState([]);

  const addPostToTags = (post) => {
    const newTags = JSON.parse(JSON.stringify(tags));
    newTags.map((tag) => (tag.posts = [...tag.posts, post]));
    setTags(newTags);
    post.tags = newTags;
    return post;
  };

  // --------------------------- //

  const handleSubmit = async () => {
    const entry = {
      reminder,
      title: title || "Journal Entry",
      location,
      picture,
      time,
      id: `post-${new Date().getTime()}`,
    };
    const entryWithTags = addPostToTags(entry);
    setPost(entryWithTags);
  };

  // Where we submit post to database
  useEffect(() => {
    Object.keys(post).length && console.log(post);
  }, [post]);

  // Will use this code when I finalize journal types

  // const type = useParams();
  // const [, setJournalType] = useState("");
  // useEffect(() => {
  //   setJournalType(type);
  // }, [type]);

  return (
    <Fade show>
      <div className="section">
        <PostTitle
          title={title || "Journal Entry"}
          subtitle="Confirm Details Below"
        />
        <Button
          style={{ marginTop: "15px" }}
          value={!reminder ? "set reminder" : "cancel reminder"}
          handleClick={toggleReminder}
          className={`${reminder && "active"} small`}
        />
        <Prompt
          question="Title"
          placeholder="Enter a captivating title"
          handleChange={setTitle}
        />
        <Prompt
          question="Location"
          placeholder="Where u at doe"
          handleChange={setLocation}
        />
        <FlexContainer className="flex-container">
          <ImageUpload handleChange={setPicture} picture={picture} />
          <TimeEntry handleChange={setTime} />
          {/* <Location /> */}
        </FlexContainer>
        <Tags tags={tags} setTags={setTags} />
        <People
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
        />
        <Prompt className="sentence" question="What were you doing?" textArea />
        <Prompt
          className="sentence"
          question="Anything worth remembering?"
          textArea
        />
        <Prompt className="sentence" question="Additional notes?" textArea />
        {/*  This is where I will be adding error handling (i.e. change "All Done" to "Fill in missing information") */}
        <SubmitContainer handleSubmit={handleSubmit} />
      </div>
    </Fade>
  );
}
