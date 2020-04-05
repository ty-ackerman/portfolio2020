import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
	const TitleContainer = styled.div`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		padding-bottom: 40px;
		position: relative;
		@media (max-width: 1200px) {
			flex-flow: column wrap;
			align-items: flex-start;
			justify-content: flex-start;
		}
		align-items: flex-end;
		h1 {
			width: 45%;
			font-size: 34px;
			@media (max-width: 1200px) {
				width: 100%;
			}
		}
		h3 {
			font-weight: 400;
			width: 55%;
			@media (max-width: 1200px) {
				width: 100%;
				padding-top: 10px;
			}
		}
		&:after {
			width: 100%;
			height: 1px;
			content: '';
			background-color: #dfdfdf;
			position: absolute;
			bottom: 0;
		}

		@media (max-width: 585px) {
			h1 {
				font-size: 30px;
			}
		}
	`;

	return (
		<TitleContainer className="title-container">
			<h1 className="title">{props.title}</h1>
			{props.subtitle && <h3 className="subtitle">{props.subtitle}</h3>}
		</TitleContainer>
	);
}
