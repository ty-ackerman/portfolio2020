import React from "react";

import Header from "./sections/Header";
import Home from "./sections/Home";
import Footer from "./sections/Footer";

import { Route, Switch } from "react-router-dom";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Writing from "./sections/Writing";
import WritingPost from "./sections/WritingPost";
import Tattoo from "./sections/Tattoo";
import AddContent from "./sections/AddContent";
import JournalEntry from "./journal/sections/JournalEntry";
import Success from "./journal/sections/Success";
import Failure from "./journal/sections/Failure";
import Review from "./journal/sections/Review";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" exact render={() => <About />} />
        <Route path="/projects" exact render={() => <Projects />} />
        <Route path="/writing/post" render={() => <WritingPost />} />
        <Route path="/writing" exact render={() => <Writing />} />
        <Route path="/tattoo/add" exact render={() => <AddContent />} />
        <Route path="/tattoo/info" exact render={() => <Tattoo />} />
        <Route path="/tattoo" exact render={() => <Tattoo redirect />} />
        <Route path="/journal/review/" exact render={() => <Review />} />
        <Route path="/journal/success/" exact render={() => <Success />} />
        <Route path="/journal/failure/" exact render={() => <Failure />} />
        <Route path="/journal/add/" exact render={() => <JournalEntry />} />
        <Route path="/journal/edit/:_id" render={() => <JournalEntry />} />
        <Route path="/journal/" exact render={() => <Review />} />
        <Route
          path="/journal/add/:scenario_id"
          render={() => <JournalEntry />}
        />
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
