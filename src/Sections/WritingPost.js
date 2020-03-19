import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string'
import {isEmpty} from "lodash"
import {PostContent, PostPhoto, PostSubtitle, PostListOrdered, PostListUnordered} from "../Components/PostContent"

import Posts from '../Writing/Posts.json';

function WritingPost(props) {
	const [post, setPost] = useState({});	
	
	useEffect(() => {
		getPost()
	},[])

	const getPost = () => {
		const postId = queryString.parse(props.location.search);
		const currPost = Posts.filter(post => post.path === postId.id);

		setPost(...currPost);
	}

	const renderContent = (section, key) => {
		switch (section.type) {
			case "paragraph":
			case "blockquote":
				return <PostContent key={key} {...section}/>
			case "photo":
				return <PostPhoto key={key} {...section} />
			case "subtitle": 
				return <PostSubtitle key={key} {...section} />
			case "ol":
				return <PostListOrdered key={key} {...section} />
			case "ul":
				return <PostListUnordered key={key} {...section} />

		}
	}
	return (
		<div>
			<div>
				<div className="title">{post.title}</div>
				<div className="subtitle">{post.description}</div>
				<div className="date">{post.dateLong}</div>
			</div>
			<div>
				{!isEmpty(post) && post.sections.map((section, key) => renderContent(section, key))}
			</div>
		</div>
	);
}

export default withRouter(WritingPost);
