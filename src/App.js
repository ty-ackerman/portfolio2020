import React from 'react';

import Header from './Sections/Header';
import Home from './Sections/Home';
import Footer from './Sections/Footer';

import { Route, Switch } from 'react-router-dom';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Writing from './Sections/Writing';
import WritingPost from './Sections/WritingPost';
import Tattoo from './Sections/Tattoo';
import AddContent from './Sections/AddContent';

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
				<Route path="/tattoo" exact render={() => <Tattoo />} />
				<Route path="/" render={() => <Home />} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
