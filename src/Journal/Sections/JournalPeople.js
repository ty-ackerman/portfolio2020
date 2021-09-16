import React, { useState } from "react";
import JournalInputName from "../Components/JournalInputName";
import JournalTextField from "../Components/JournalTextField";
import JournalButton from "../Components/JournalButton";
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
    margin-bottom: 5px;
  }
`;

const JournalPeople = ({ selectedPeople, setSelectedPeople }) => {
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
          person.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
      .slice(0, 10);
  return (
    <PeopleContainer>
      <JournalInputName inputName={"people"} />
      <div className="personContainer">
        {selectedPeople.map((person) => (
          <JournalButton
            value={`${person.firstName} ${person.lastName}`}
            className="tags active"
            key={person.firstName + person.lastName + person.id}
            handleClick={() => removeSelected(person)}
          />
        ))}
      </div>

      <JournalTextField
        placeholder="Enter Name"
        handleChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div className="personContainer">
        {foundPeopleArray().length
          ? searchTerm &&
            foundPeopleArray().map((person) => {
              return (
                <JournalButton
                  key={person.id}
                  onClick={() => addSelected(person)}
                  value={`${person.firstName} ${person.lastName}`}
                  className="tags"
                />
              );
            })
          : "No Results"}
      </div>
      {/* <div className="personContainer">
        {allPeople.map((person) => (
          <JournalButton
            value={`${person.firstName} ${person.lastName}`}
            className="tags"
            key={person.firstName + person.lastName + person.id}
            handleClick={() => addSelected(person)}
          />
        ))}
      </div> */}
    </PeopleContainer>
  );
};

export default JournalPeople;
