import React, { useEffect } from 'react';
import Title from '../Components/Title';
import AboutText from '../Components/AboutText';
import Fade from '../Components/Fade'

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Fade show>
		<div className="section">
			<Title title="About Me" />
			<AboutText />
		</div>
		</Fade>
	);
}
