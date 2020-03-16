import React, { useEffect } from 'react';
import Title from '../Components/Title';

import Posts from '../Writing/Posts.json';
import WritingListItem from '../Components/WritingListItem';

export default function Writing() {
	return (
		<div>
			<Title title="Writing" subtitle="Notes about life, work, and everything in between." />
			{Posts.map((post) => {
				return <WritingListItem key={post.path} post={post} />;
			})}
		</div>
	);
}
