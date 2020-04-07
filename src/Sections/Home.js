import React, { useEffect, useState } from 'react';
import HomeBio from '../Components/HomeBio';
import Skills from '../Components/Skills';
import RecentWriting from '../Components/RecentWriting';
import styled from 'styled-components';
import Fade from "../Components/Fade"

export default function Home() {

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const HomeSection = styled.div`
		position: relative;
	`;

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
