import React, { useState } from "react";
import InputName from "../components/InputName";
import TextField from "../components/TextField";
import Button from "../components/Button";
import styled from "styled-components";

// This will come from API
import MOCKDATA from "../../MOCK_DATA.json";

const PeopleContainer = styled.div.attrs((props) => ({
  active: props.active,
}))`
  .personContainer {
    display: flex;
    flex-flow: row wrap;
    input {
      margin-right: 4px;
    }
  }
  .searchBar {
    width: 100%;
    display: flex;
    input[type="button"] {
      margin-left: 2px;
    }
  }
  .noResults {
    font-size: 12px;
    font-style: italic;
    margin-left: 10px;
  }
`;

const People = ({ selectedPeople, setSelectedPeople }) => {
  const [allPeople, setAllPeople] = useState(MOCKDATA);
  const [searchTerm, setSearchTerm] = useState("");

  const removeSelected = (person) => {
    setSelectedPeople(
      selectedPeople.filter((selectedPerson) => {
        return selectedPerson.id !== person.id;
      })
    );
    setAllPeople([...allPeople, person]);
  };

  const addSelected = (person) => {
    setSearchTerm("");
    setAllPeople(allPeople.filter((val) => val.id !== person.id));
    setSelectedPeople([...selectedPeople, person]);
  };

  const foundPeopleArray = () =>
    allPeople
      .filter((person) => {
        return (
          person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(
            searchTerm.toLowerCase()
          )
        );
      })
      .slice(0, 10);

  const createNewPerson = () => {
    const name = searchTerm.split(" ");
    const newPerson = {
      firstName: name[0],
      lastName: name.slice(1).join(" ") || "",
      id: new Date().getTime(),
      posts: [],
    };
    setSelectedPeople([...selectedPeople, newPerson]);
    setSearchTerm("");
  };
  return (
    <PeopleContainer>
      <InputName inputName={"people"} />
      <div className="personContainer">
        {selectedPeople.map((person) => (
          <Button
            value={`${person.firstName} ${person.lastName}`}
            className="tags active"
            key={person.firstName + person.lastName + person.id}
            handleClick={() => removeSelected(person)}
          />
        ))}
      </div>
      <div className="searchBar">
        <TextField
          placeholder="Enter Name"
          handleChange={setSearchTerm}
          className="fullWidth"
          value={searchTerm}
        />
        {!foundPeopleArray().length && searchTerm.length && (
          <Button
            value="Add New Person"
            className="tags"
            bgColor="#dadada"
            handleClick={createNewPerson}
          />
        )}
      </div>
      <div className="personContainer">
        {foundPeopleArray().length ? (
          searchTerm &&
          foundPeopleArray().map((person) => {
            return (
              <Button
                key={person.id}
                onClick={() => addSelected(person)}
                value={`${person.firstName} ${person.lastName}`}
                className="tags"
              />
            );
          })
        ) : (
          <p className="noResults">No Results</p>
        )}
      </div>
    </PeopleContainer>
  );
};

export default People;
