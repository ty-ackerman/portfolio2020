import React from 'react';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import styled, { keyframes } from 'styled-components';
import { fadeOut, fadeIn } from 'react-animations';

export default function TattooContent(props) {
	const { content, type } = props;

	const handleContent = (content, type) => {
		switch (type) {
			case 'picture':
				return (
					<div style={{ maxWidth: '50%' }}>
						<img src={content} alt="" />
					</div>
				);
			case 'website':
				return (
					<div style={{ maxWidth: '80%' }}>
						<div>QR code redirects to:</div>
						<div style={{ paddingTop: '10px' }}>
							<a target="_blank" rel="noopener noreferrer" href={content}>
								{content}
							</a>
						</div>
					</div>
				);
			case 'video':
				const id = getYoutubeId(content);
				return (
					<iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1`}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen={true}
					/>
				);
				break;

			default:
				break;
		}
	};

	const getYoutubeId = (url) => {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match = url.match(regExp);

		return match && match[2].length === 11 ? match[2] : null;
	};

	const override = css`margin: 0 auto;`;

	const LoadingContainer = styled.div`
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const fadeOutAnimation = keyframes`${fadeOut}`;
	const fadeInAnimation = keyframes`${fadeIn}`;

	const FadeOutDiv = styled.div`animation: 1s ${fadeOutAnimation};`;
	const FadeInDiv = styled.div`animation: 1s ${fadeInAnimation};`;

	const TattooContentContainer = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px 0;
	`;

	if (content && type) {
		return (
			<FadeInDiv>
				<TattooContentContainer>{handleContent(content, type)}</TattooContentContainer>
			</FadeInDiv>
		);
	}

	return (
		<FadeOutDiv>
			<LoadingContainer>
				<ClockLoader css={override} size={50} color={'#000000'} loading={true} />
			</LoadingContainer>
		</FadeOutDiv>
	);
}
