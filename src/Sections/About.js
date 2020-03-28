import React, { useEffect } from 'react';
import Title from '../Components/Title';
import AboutText from '../Components/AboutText';
import styled from 'styled-components';

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const AboutSection = styled.div`margin-left: 380px;`;

	return (
		<AboutSection className="section">
			<Title title="About Me" />
			<AboutText />
		</AboutSection>
	);
}
