import React from 'react';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import styled from 'styled-components';
import Fade from './Fade'

export default function TattooContent(props) {
	const { content, type, redirect } = props;

	const isMobile = () => {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return true;
		}
		return false;
	};

	const handleContent = (content, type) => {
		switch (type) {
			case 'picture':
				return (
					<div style={{ maxWidth: isMobile() ? '100%' : '50%' }}>
						<img src={content} alt="" />
					</div>
				);
			case 'website':
				if (redirect) {
					window.location = content;
				}
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


	const TattooContentContainer = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px 0;
	`;

	if (content && type) {
		return (
			<Fade show>
				<TattooContentContainer>{handleContent(content, type)}</TattooContentContainer>
			</Fade >
		);
	}

	return (
		<Fade show={false} >
			<LoadingContainer>
				<ClockLoader css={override} size={50} color={'#000000'} loading={true} />
			</LoadingContainer>
		</Fade >
	);
}
