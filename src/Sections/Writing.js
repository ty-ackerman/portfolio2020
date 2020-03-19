import React, { useEffect } from 'react';
import Title from '../Components/Title';

import Posts from '../Writing/Posts.json';
import WritingListItem from '../Components/WritingListItem';

import styled from 'styled-components'

export default function Writing() {
	const WritingContainer = styled.div`
		margin: 100px 40px 0 380px;
	`

	return (
		<WritingContainer>
			<Title title="Writing" subtitle="Notes about life, work, and everything in between." />
			{Posts.map((post) => {
				return <WritingListItem key={post.path} post={post} />;
			})}
		</WritingContainer>
	);
}
