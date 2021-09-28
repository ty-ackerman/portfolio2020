import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Tag = ({ tag, setTags, tags, initalActive }) => {
  const [active, setActive] = useState(initalActive);

  useEffect(() => {
    setActive(initalActive);
  }, [tag, initalActive]);

  const handleClick = async () => {
    setTags([...tags, tag]);
    setActive(!active);
  };

  const handleUnclick = () => {
    setTags(tags.filter((item) => item !== tag));
    setActive(!active);
  };

  return (
    <Button
      value={tag}
      className={`tags ${active && "active"}`}
      handleClick={!active ? handleClick : handleUnclick}
    />
  );
};

export default Tag;
