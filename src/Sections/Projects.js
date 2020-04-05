import React, { useEffect } from 'react';
import Title from '../Components/Title';

export default function Projects() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="section">
			<Title title="Projects" />
			<div style={{ marginTop: '40px' }}>Under construction ...</div>
		</div>
	);
}
