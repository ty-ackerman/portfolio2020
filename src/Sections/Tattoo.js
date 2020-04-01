import React, { useEffect } from 'react';
import Title from '../Components/Title';
import { Link } from 'react-router-dom';
import { PostContent, PostSubtitle } from '../Components/PostContent';
import styled from 'styled-components';

export default function Tattoo() {
	useEffect(() => {
		getData();
	});

	const description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis ducimus in nostrum, et aspernatur architecto voluptatum facere a nesciunt! Quia dolor hic error minima doloribus? Doloremque laudantium tenetur porro?';

	const subtitle = 'So What Does It Scan To?';

	const getData = () => {
		console.log('Gotteemmmmmm');
	};

	return (
		<div className="section">
			<div className="post-contents">
				<Title title="My QR Code Tattoo" subtitle="My ridiculous permanent decision." />
				<PostContent content={description} />
				To learn more about the tattoo, <Link to="/writing/post?id=tattoo">click here</Link>.
				<PostSubtitle content={subtitle} />
			</div>
		</div>
	);
}
