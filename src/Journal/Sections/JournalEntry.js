import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import JournalDataService from "../../services/journal";

import Fade from "../../components/Fade";
import PostTitle from "../../components/PostTitle";
import Button from "../components/Button";
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

  const toggleReminder = () => {
    setReminder(!reminder);
  };

  // Restaurant Backend Database Setup

  useEffect(() => {
    retrieveRestaurants();
    // retrieveCuisines();
  }, []);

  const retrieveRestaurants = async () => {
    try {
      console.log(JournalDataService.getAllLocations());
      // console.log(
      //   await JournalDataService.updateLocation({
      //     address: "1703-20 Minowan Miikan",
      //     city: "Toronto",
      //     country: "Canada",
      //     date: "1632277694706",
      //     lat: "21354321",
      //     long: "231351321",
      //     name: "Home Sweet Home",
      //     _id: "614a94beb435654ce5ac6c95",
      //   })
      // );
      // console.log(await JournalDataService.addLocation({ name: "Home" }));
      // console.log(
      //   await JournalDataService.addPerson({
      //     firstName: "Toby",
      //     lastName: "Ackerman",
      //   })
      // );
    } catch (error) {
      console.error(error);
    }
  };

  // Tag
  const [tags, setTags] = useState([]);

  const addPostToState = (post, prevState, setNewState) => {
    const newState = JSON.parse(JSON.stringify(prevState));
    newState.map((obj) => (obj.posts = [...obj.posts, post]));
    setNewState(newState);
    return newState;
  };

  // People
  const [selectedPeople, setSelectedPeople] = useState([]);

  // --------------------------- //

  const handleSubmit = async () => {
    const entry = {
      reminder,
      title: title || "Journal Entry",
      location,
      picture,
      time,
      id: `post-${new Date().getTime()}`,
      type: "general",
    };
    entry.tags = addPostToState(entry, tags, setTags);
    entry.people = addPostToState(entry, selectedPeople, setSelectedPeople);
    setPost(entry);
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
