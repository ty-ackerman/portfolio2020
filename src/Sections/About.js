import React, { useEffect } from "react";
import Title from "../components/Title";
import AboutText from "../components/AboutText";
import Fade from "../components/Fade";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fade show>
      <div className="section">
        <Title title="About" />
        <AboutText />
      </div>
    </Fade>
  );
}
