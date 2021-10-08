import React from "react";
import InputName from "./InputName";
import styled from "styled-components";

const DropdownStyled = styled.div`
    select {
        -webkit-appearance: none
        -webkit-border-radius: 0px;
        border-radius: 0;
        -moz-appearance: none;
        appearance: none;
        background-color: white;
        border: 1px solid black;
        width: 48%;
        font-size: 12px;
        color: black;
        padding: 0 10px;
        &:focus {
            outline: none;
        }
    }
`;

const Dropdown = ({ title, list, setSelected, defaultId }) => {
  const handleChange = (e) => {
    const selected = list.filter((item) => {
      return item.name === e.target.value;
    });
    setSelected(...selected);
  };

  // To fix chrome bug of no text-tranform: capitalize for options
  const capitalizeText = (option) => {
    const optionArray = option.name.split(" ");
    const nameArray = [];
    optionArray.forEach((op) => {
      nameArray.push(op.charAt(0).toUpperCase() + op.slice(1));
    });

    return nameArray.join(" ");
  };

  const getDefaultIndex = (id, array) =>
    array.map((item) => item._id).indexOf(id);

  const sortArray = (items) =>
    items.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

  return (
    <DropdownStyled>
      <InputName inputName={title} />
      <select
        onChange={handleChange}
        defaultValue={list[getDefaultIndex(defaultId, list)].name}
      >
        {sortArray(list).map((item) => {
          return (
            <option key={item._id} value={item.name}>
              {capitalizeText(item)}
            </option>
          );
        })}
      </select>
    </DropdownStyled>
  );
};

export default Dropdown;
