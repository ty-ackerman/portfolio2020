import React, { useEffect } from 'react';
import HomeBio from '../Components/HomeBio';
import Skills from '../Components/Skills';
import RecentWriting from '../Components/RecentWriting';
import styled from 'styled-components';

export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const HomeSection = styled.div`
		margin-left: 380px;
		margin-top: 100px;
		margin-right: 40px;
	`;

	return (
		<HomeSection className="section">
			<HomeBio />
			<Skills />
			<RecentWriting />
		</HomeSection>
	);
}
