import React, { useEffect } from "react";
import HomeBio from "../components/HomeBio";
import Skills from "../components/Skills";
import RecentWriting from "../components/RecentWriting";
import styled from "styled-components";
import Fade from "../components/Fade";

const HomeSection = styled.div`
  position: relative;
`;

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fade show>
      <HomeSection className="section">
        <HomeBio />
        <Skills />
        <RecentWriting />
      </HomeSection>
    </Fade>
  );
}
