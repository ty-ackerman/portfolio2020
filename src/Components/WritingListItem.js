import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function WritingListItem(props) {
	const { post } = props;

	const StyledItem = styled.div`
		border-bottom: 1px solid #dfdfdf;
		.one-post {
			padding: 25px 0;
			display: flex;
		}
		.post-date {
			width: 45%;
			font-size: 18px;
			display: flex;
			align-items: center;
		}
		.post-title {
			font-weight: 500;
		}
		.post-subtitle {
			margin-top: 5px;
			font-style: italic;
			color: #656565;
		}
	`;

	return (
		<StyledItem>
			<Link to={`/writing/post?id=${post.path}`}>
				<div className="one-post">
					<div className="post-info post-date">{post.dateShort}</div>
					<div>
						<div className="post-info post-title">{post.title}</div>
						<div className="post-info post-subtitle">{post.description}</div>
					</div>
				</div>
			</Link>
		</StyledItem>
	);
}
