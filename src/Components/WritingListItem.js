import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function WritingListItem(props) {
	const { post } = props;

	return (
		<div>
			<Link to={`/writing/post?id=${post.path}`}>
				<div>{post.dateShort}</div>
				<div>{post.title}</div>
			</Link>
		</div>
	);
}
