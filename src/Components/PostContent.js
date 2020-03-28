import React from 'react';
import styled from 'styled-components';

export function PostContent(props) {
	const Paragraph = styled.div`margin: 14px 0;`;
	return <Paragraph className={`post-${props.type}`}>{props.content}</Paragraph>;
}

export function PostSubtitle(props) {
	const Subtitle = styled.h2`margin: 20px 0;`;

	return (
		<div>
			<Subtitle>{props.content}</Subtitle>
		</div>
	);
}

export function PostBlockquote(props) {
	const Blockquote = styled.div`
		margin: 20px 0;
		padding-left: 30px;
		position: relative;
		font-style: italic;
		&:before {
			width: 1px;
			height: calc(100% - 10px);
			content: "";
			background-color: #dfdfdf;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	`;

	return (
		<div>
			<Blockquote>{props.content}</Blockquote>
		</div>
	);
}

export function PostListOrdered(props) {
	return (
		<div>
			<ol>
				{props.content.map((item, key) => {
					return <li key={key}>{item}</li>;
				})}
			</ol>
		</div>
	);
}

export function PostListUnordered(props) {
	return (
		<div>
			<ul>
				{props.content.map((item, key) => {
					return <li key={key}>{item}</li>;
				})}
			</ul>
		</div>
	);
}

export function PostPhoto(props) {
	const imageWidth = () => {
		switch (props.size) {
			case 'sm':
				return '25%';
			case 'md':
				return '50%';
			case 'lg':
				return '100%';
		}
	};

	const PhotoContainer = styled.div`
		width: ${imageWidth()};
		margin: 30px 0;
	`;

	return (
		<PhotoContainer className={`post-picture post-picture-${props.size}`}>
			<img src={props.content} alt={props.altText} />
		</PhotoContainer>
	);
}
