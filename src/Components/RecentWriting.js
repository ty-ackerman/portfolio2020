import React from 'react';

import Posts from '../Writing/Posts.json';
import WritingListItem from './WritingListItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';

export default function RecentWriting() {
	// Temp articles until I actually write them

	const renderWriting = (Posts) => {
		if (!Posts) return;
		const recentPosts = Posts.length >= 3 ? Posts.slice(0, 3) : Posts;
		return recentPosts.map((post) => {
			return <WritingListItem key={post.path} post={post} />;
		});
	};

	const RecentWriting = styled.div`
		margin-top: 40px;
		.see-more {
			padding: 20px 0;
			text-align: left;
			height: 50px;
			display: flex;
			align-items: center;
		}
	`;

	return (
		<RecentWriting>
			<Title title="Recent Writing" />
			{renderWriting(Posts)}
			<div className="see-more">
				<Link to="/writing">View all writing</Link>
			</div>
		</RecentWriting>
	);
}
