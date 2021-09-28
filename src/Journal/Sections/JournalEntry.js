import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
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
import Dropdown from "../components/Dropdown";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Entry() {
  // Post
  const { scenario_id } = useParams();
  const [scenario, setScenario] = useState({});
  const [scenarios, setScenarios] = useState([]);
  const [entry, setPost] = useState({ entry_id: new Date().getTime() });
  const [reminder, setReminder] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [picture, setPicture] = useState("");
  const [time, setTime] = useState(new Date().getTime());
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const toggleReminder = () => {
    setReminder(!reminder);
  };

  // Tag
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const getInitialScenario = useCallback(async () => {
    try {
      const initialScenario = await JournalDataService.getScenario(scenario_id);
      const allScenarios = await JournalDataService.getScenarios();

      setScenario(initialScenario.data);
      setAllTags(initialScenario.data.frequentTags);
      setScenarios(allScenarios.data);
    } catch (error) {
      console.error(error);
    }
  }, [scenario_id]);

  useEffect(() => {
    getInitialScenario();
  }, [getInitialScenario]);

  const onScenarioChange = useCallback(async () => {
    if (scenario._id) {
      const newScenario = await JournalDataService.getScenario(scenario._id);
      const { data } = newScenario;
      setQuestions(data.questions);
      setAllTags(data.frequentTags);
    }
  }, [scenario._id]);

  useEffect(() => {
    onScenarioChange();
  }, [scenario, onScenarioChange]);

  // People
  const [selectedPeople, setSelectedPeople] = useState([]);

  // --------------------------- //

  const handleSubmit = async () => {
    // const entry = {
    //   reminder,
    //   title: title || "Journal Entry",
    //   location,
    //   picture,
    //   time,
    //   id: `post-${new Date().getTime()}`,
    //   type: "general",
    // };
    // entry.tags = addPostToState(entry, tags, setTags);
    // entry.people = addPostToState(entry, selectedPeople, setSelectedPeople);
    // setPost(entry);
  };

  // Where we submit post to database
  // useEffect(() => {
  //   Object.keys(post).length && console.log(post);
  // }, [post]);

  // const addPostToState = (post, prevState, setNewState) => {
  //   const newState = JSON.parse(JSON.stringify(prevState));
  //   newState.map((obj) => (obj.posts = [...obj.posts, post]));
  //   setNewState(newState);
  //   return newState;
  // };

  const formatAnswers = (answer, question) => {
    const answerDoc = {
      response: answer,
      question_id: question.question_id,
      entry_id: entry.entry_id,
      answer_id: new Date().getTime(),
    };

    if (
      answers.filter((answer) => answer.question_id === question.question_id)
        .length === 0
    ) {
      setAnswers([...answers, answerDoc]);
    } else {
      setAnswers([
        ...answers.filter(
          (answer) => answer.question_id !== question.question_id
        ),
        answerDoc,
      ]);
    }
  };

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
        {scenarios.length > 0 && (
          <Dropdown
            title="Scenario Type"
            list={scenarios}
            defaultId={scenario._id}
            setSelected={setScenario}
          />
        )}
        <Prompt
          question="Location"
          placeholder="Where u at doe"
          handleChange={setLocation}
        />
        <FlexContainer className="flex-container">
          <ImageUpload handleChange={setPicture} picture={picture} />
          <TimeEntry handleChange={setTime} />
        </FlexContainer>
        {
          <Tags
            allTags={allTags}
            setAllTags={setAllTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        }
        <People
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
        />
        {questions &&
          questions.map((question) => {
            return (
              <Prompt
                key={question.question_id}
                className="sentence"
                questionObj={question}
                question={question.ask}
                type={question.type}
                handleChange={formatAnswers}
              />
            );
          })}
        {/*  This is where I will be adding error handling (i.e. change "All Done" to "Fill in missing information") */}
        <SubmitContainer handleSubmit={handleSubmit} />
      </div>
    </Fade>
  );
}
