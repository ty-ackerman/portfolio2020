import React, { useState } from "react";
import JournalButton from "../Components/JournalButton";

const JournalTag = ({ tag }) => {
  const [active, setActive] = useState(false);

  return (
    <JournalButton
      value={tag.name}
      className={`tags ${active && "active"}`}
      handleClick={() => setActive(!active)}
    />
  );
};

export default JournalTag;
