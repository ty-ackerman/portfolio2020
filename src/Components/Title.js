import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
	const TitleContainer = styled.div`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		margin-bottom: 40px;
		@media (max-width: 1200px) {
			flex-flow: column wrap;
			align-items: flex-start;
			justify-content: flex-start;
		}
		align-items: flex-end;
		h1 {
			width: 45%;
			font-size: 34px;
		}
		h3 {
			font-weight: 400;
			width: 55%;
		}
	`;

	return (
		<TitleContainer className="title-container">
			<h1 className="title">{props.title}</h1>
			{props.subtitle && <h3 className="subtitle">{props.subtitle}</h3>}
		</TitleContainer>
	);
}
