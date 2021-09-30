import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import JournalDataService from "../../services/journal";

import Fade from "../../components/Fade";
import PostTitle from "../../components/PostTitle";
import Button from "../components/Button";
import ImageUpload from "./ImageUpload";
import Prompt from "./Prompt";
import Tags from "./Tags";

import SubmitContainer from "./SubmitContainer";
import TimeEntry from "./TimeEntry";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Entry() {
  // Post
  const history = useHistory();
  const { scenario_id, _id } = useParams();
  const [scenario, setScenario] = useState({});
  const [scenarios, setScenarios] = useState([]);
  const [entry, setEntry] = useState({
    entry_id: new Date().getTime().toString(),
  });
  const [reminder, setReminder] = useState(false);
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [time, setTime] = useState(new Date().getTime().toString());
  const [resetTime, setResetTime] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  // For location search
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [addPeople, setAddPeople] = useState([]);
  // For destinatio nsearch
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [addLocations, setAddLocations] = useState([]);

  const toggleReminder = () => {
    setReminder(!reminder);
  };

  // Tag
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const getInitialScenario = useCallback(async () => {
    try {
      const initialScenario = await JournalDataService.getScenario(
        scenario_id || "61521232b409a5cc2cdda3a0"
      );
      const allScenarios = await JournalDataService.getScenarios();

      setScenario(initialScenario.data);
      setAllTags(initialScenario.data.frequentTags);
      setScenarios(allScenarios.data);
    } catch (error) {
      history.push("/journal/add");
    }
  }, [scenario_id, history]);

  const getInitialEntry = useCallback(async () => {
    try {
      const res = (await JournalDataService.getEntry(_id)).data;
      const allScenarios = (await JournalDataService.getScenarios()).data;
      console.log(res);
      // Update all information
      setReminder(res.reminder);
      setTitle(res.title);
      setScenario(res.scenario);
      setScenarios(allScenarios);
      setAllTags(res.scenario.frequentTags);
      setSelectedTags(
        res.tags.map((tag) => {
          return { name: tag, scenario_id: res.scenario.scenario_id };
        })
      );
      setSelectedLocations(res.locations);
      getAllLocations();
      setPicture(res.picture);
      setTime(res.time);
      setResetTime(res.time);
      setSelectedPeople(res.people);
      getAllPeople();
      setAnswers(res.answers);
      // Update entry last
    } catch (error) {
      console.error(error);
      history.push("/journal/add");
    }
  }, [_id, history]);

  const getAllPeople = async () => {
    const people = await JournalDataService.getAllPeople();
    setAllPeople(people.data);
  };

  const getAllLocations = async () => {
    const locations = await JournalDataService.getAllLocations();
    setAllLocations(locations.data);
  };

  useEffect(() => {
    getInitialEntry();
  }, [_id, getInitialEntry]);

  useEffect(() => {
    if (!_id) {
      getInitialScenario();
      getAllPeople();
      getAllLocations();
    }
  }, [_id, getInitialScenario]);

  const onScenarioChange = useCallback(async () => {
    if (scenario._id) {
      const newScenario = await JournalDataService.getScenario(scenario._id);
      const { data } = newScenario;
      setQuestions(data.questions);
      setAllTags(data.frequentTags);
      // setSelectedTags([]);
      // setAnswers([]);
    }
  }, [scenario._id]);

  useEffect(() => {
    onScenarioChange();
  }, [scenario, onScenarioChange]);

  const formatAnswers = (answer, question) => {
    const answerDoc = {
      response: answer,
      question_id: question.question_id,
      entry_id: entry.entry_id,
      answer_id: new Date().getTime().toString(),
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

  // For submitting People to DB
  const formatPersonObj = (searchTerm) => {
    const name = searchTerm.split(" ");
    return {
      firstName: name[0],
      lastName: name.slice(1).join(" ") || "",
      person_id: new Date().getTime().toString(),
    };
  };

  const formatPerson = (person) =>
    person.alias || `${person.firstName} ${person.lastName}`;

  const isDuplicatePerson = (searchTerm) => {
    console.log(searchTerm, selectedPeople);
    if (
      selectedPeople.filter(
        (person) =>
          `${person.firstName.toLowerCase()}${
            person.lastName.toLowerCase() && ` ${person.lastName.toLowerCase()}`
          }` === searchTerm.toLowerCase() ||
          (person.alias &&
            person.alias.toLowerCase() === searchTerm.toLowerCase())
      ).length > 0 ||
      allPeople.filter(
        (person) =>
          `${person.firstName.toLowerCase()}${
            person.lastName.toLowerCase() && ` ${person.lastName.toLowerCase()}`
          }` === searchTerm.toLowerCase() ||
          (person.alias &&
            person.alias.toLowerCase() === searchTerm.toLowerCase())
      ).length > 0
    ) {
      return true;
    }
    return false;
  };

  const foundPeopleArray = (allPeople, searchTerm) => {
    return allPeople
      .filter((person) => {
        if (person._id) {
          return (
            person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.alias.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(
              searchTerm.toLowerCase()
            )
          );
        }
        return (
          person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(
            searchTerm.toLowerCase()
          )
        );
      })
      .slice(0, 10);
  };

  // For submitting Locations to DB
  const formatLocationObj = (searchTerm) => {
    return {
      name: searchTerm,
      location_id: new Date().getTime().toString(),
    };
  };

  const formatLocation = (location) => location.name;

  const foundLocationsArray = (allLocations, searchTerm) => {
    return allLocations
      .filter((location) => {
        if (location._id) {
          return (
            location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            location.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
        }
        return location.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .slice(0, 10);
  };

  const isDuplicateLocation = (searchTerm) => {
    if (
      selectedLocations.filter(
        (location) => location.name.toLowerCase() === searchTerm.toLowerCase()
      ).length > 0 ||
      allLocations.filter(
        (location) => location.name.toLowerCase() === searchTerm.toLowerCase()
      ).length > 0
    ) {
      return true;
    }
    return false;
  };

  // --------------------------- //

  const handleSubmit = async () => {
    try {
      const entryDoc = {
        ...entry,
        reminder,
        title: title || "Journal Entry",
        location_ids: selectedLocations.map((location) => location.location_id),
        picture,
        time: time.toString(),
        tags: selectedTags
          .filter((tag) => tag.scenario_id === scenario.scenario_id)
          .map((tag) => tag.name),
        person_ids: selectedPeople.map((person) => person.person_id),
        scenario_id: scenario.scenario_id,
        question_ids: scenario.question_ids,
        answer_ids: answers
          .filter((answer) =>
            scenario.question_ids.includes(answer.question_id)
          )
          .map((answer) => answer.answer_id),
        _id: _id || undefined,
      };
      setEntry(entryDoc);
      addLocations.forEach(
        async (data) => await JournalDataService.addLocation(data)
      );
      addPeople.forEach(
        async (data) => await JournalDataService.addPerson(data)
      );
      // Allow me to see the history of an answer/post (for future features)
      answers.forEach(async (data) => await JournalDataService.addAnswer(data));
      if (_id) {
        console.log("here");
        await JournalDataService.editEntry(entryDoc);
      } else {
        await JournalDataService.addEntry(entryDoc);
      }
      history.push("/journal/success");
    } catch (error) {
      history.push("/journal/error");
      console.error(error);
    }
  };

  const addExistingAnswer = (question) => {
    const correctAnswer = answers.filter(
      (answer) => answer.question_id === question.question_id
    );
    if (correctAnswer.length > 0) {
      return correctAnswer[0].response;
    } else {
      return "";
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
          value={title}
        />
        {scenarios.length > 0 && (
          <Dropdown
            title="Scenario Type"
            list={scenarios}
            defaultId={scenario._id}
            setSelected={setScenario}
          />
        )}
        <SearchBar
          placeholder="Where u at doe"
          addButtonValue="Add New Location"
          allItems={allLocations}
          setAllItems={setAllLocations}
          selectedItems={selectedLocations}
          setSelectedItems={setSelectedLocations}
          newItemObjFormat={formatLocationObj}
          itemFormat={formatLocation}
          inputName="Locations"
          foundItemsArray={foundLocationsArray}
          addItems={addLocations}
          setAddItems={setAddLocations}
          idName="location_id"
          isDuplicate={isDuplicateLocation}
        />
        <FlexContainer className="flex-container">
          <ImageUpload handleChange={setPicture} picture={picture} />
          <TimeEntry handleChange={setTime} time={time} resetTime={resetTime} />
        </FlexContainer>
        {
          <Tags
            allTags={allTags}
            setAllTags={setAllTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            scenario_id={scenario.scenario_id}
          />
        }
        {allPeople.length ? (
          <SearchBar
            placeholder="Enter name"
            addButtonValue="Add New Person"
            allItems={allPeople}
            setAllItems={setAllPeople}
            selectedItems={selectedPeople}
            setSelectedItems={setSelectedPeople}
            newItemObjFormat={formatPersonObj}
            itemFormat={formatPerson}
            inputName="people"
            foundItemsArray={foundPeopleArray}
            addItems={addPeople}
            setAddItems={setAddPeople}
            idName="person_id"
            isDuplicate={isDuplicatePerson}
          />
        ) : null}
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
                value={addExistingAnswer(question)}
              />
            );
          })}
        {/*  This is where I will be adding error handling (i.e. change "All Done" to "Fill in missing information") */}
        <SubmitContainer handleSubmit={handleSubmit} />
      </div>
    </Fade>
  );
}
