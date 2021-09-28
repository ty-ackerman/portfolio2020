import React, { useState } from "react";
import InputName from "../components/InputName";
import TextField from "../components/TextField";
import Button from "../components/Button";
import styled from "styled-components";

const SearchBarContainer = styled.div.attrs((props) => ({
  active: props.active,
}))`
  .itemContainer {
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
  .errorContainer {
    color: red;
    font-size: 12px;
    font-style: italic;
    span {
      text-transform: capitalize;
    }
  }
`;

const SearchBar = ({
  placeholder = "Search for item",
  addButtonValue = "Add",
  allItems,
  setAllItems,
  selectedItems,
  setSelectedItems,
  newItemObjFormat,
  addItems,
  setAddItems,
  itemFormat, // for formatting the value of the tag
  inputName,
  idName,
  isDuplicate,
  foundItemsArray, // to properly format (i.e. name will be formatted as "first name" + "last name") and will return specified amount (so not 100 people are returned)
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const removeSelected = (item) => {
    setSelectedItems(
      selectedItems.filter(
        (selectedItem) => selectedItem[idName] !== item[idName]
      )
    );
    setAllItems([...allItems, item]);
  };

  const addSelected = (item) => {
    setAllItems(allItems.filter((val) => val[idName] !== item[idName]));
    setSelectedItems([...selectedItems, item]);
    setSearchTerm("");
  };

  const createNewItem = () => {
    if (isDuplicate(searchTerm)) {
      setError(true);
    } else {
      setError(false);
      const newItem = newItemObjFormat(searchTerm);
      setSelectedItems([...selectedItems, newItem]);
      setAddItems([...addItems, newItem]);
      setSearchTerm("");
    }
  };
  return (
    <SearchBarContainer>
      <InputName inputName={inputName} />
      <div className="itemContainer">
        {selectedItems.map((item) => (
          <Button
            value={itemFormat(item)}
            className="tags active"
            key={item[idName]}
            handleClick={() => {
              setSearchTerm("");
              setError(false);
              removeSelected(item);
            }}
          />
        ))}
      </div>
      <div className="searchBar">
        <TextField
          placeholder={placeholder}
          handleChange={(e) => {
            setError(false);
            setSearchTerm(e);
          }}
          className="fullWidth"
          value={searchTerm}
        />
        {searchTerm.length ? (
          <Button
            value={addButtonValue}
            className="tags"
            bgColor="#dadada"
            handleClick={createNewItem}
          />
        ) : null}
      </div>
      <div className="itemContainer">
        {foundItemsArray(allItems, searchTerm).length
          ? searchTerm &&
            foundItemsArray(allItems, searchTerm).map((item) => {
              return (
                <Button
                  key={item[idName]}
                  onClick={() => {
                    setError(false);
                    addSelected(item);
                  }}
                  value={itemFormat(item)}
                  className="tags"
                />
              );
            })
          : !error && <p className="noResults">No Results</p>}
      </div>
      {error && (
        <div className="errorContainer">
          "<span>{searchTerm}</span>" already exists, idiot. Learn to read, and
          select another.
        </div>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
