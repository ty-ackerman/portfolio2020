import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Tag = ({
  tag,
  handleClick,
  handleUnclick,
  scenario_id,
  initalActive,
}) => {
  const [active, setActive] = useState(initalActive);

  useEffect(() => {
    setActive(initalActive);
  }, [tag, initalActive]);

  return (
    <Button
      value={tag}
      className={`tags ${active && "active"}`}
      handleClick={
        !active
          ? () => handleClick(active, setActive, tag)
          : () => handleUnclick(active, setActive, tag)
      }
    />
  );
};

export default Tag;
