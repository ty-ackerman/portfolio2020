import React, { useState } from "react";
import Button from "../components/Button";

const Tag = ({ tag, setTags, tags }) => {
  const [active, setActive] = useState(false);

  const handleClick = async () => {
    setTags([...tags, tag]);
    setActive(!active);
  };

  const handleUnclick = () => {
    setTags(tags.filter((item) => item.id !== tag.id));
    setActive(!active);
  };

  return (
    <Button
      value={tag.name}
      className={`tags ${active && "active"}`}
      handleClick={!active ? handleClick : handleUnclick}
    />
  );
};

export default Tag;
