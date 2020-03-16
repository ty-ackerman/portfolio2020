import React from 'react';

import Header from './Sections/Header';
import Home from './Sections/Home';
import Footer from './Sections/Footer';

import { Route, Switch } from 'react-router-dom';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Writing from './Sections/Writing';
import WritingPost from './Sections/WritingPost';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/about" exact render={() => <About />} />
				<Route path="/projects" exact render={() => <Projects />} />
				<Route path="/writing/post" render={() => <WritingPost />} />
				<Route path="/writing" exact render={() => <Writing />} />
				<Route path="/" render={() => <Home />} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
