import React, { Component } from 'react';
import { postData } from '../Components/fire';
import Title from '../Components/Title';
import fire from '../Components/fire';
import { css } from '@emotion/core';
import TattooContent from '../Components/TattooContent';
import ClockLoader from 'react-spinners/ClockLoader';
import styled, { keyframes } from 'styled-components';
import { fadeOut, fadeIn } from 'react-animations';

const ContentAdder = styled.div`
	.add-content {
		display: flex;
		margin-top: 40px;
		flex-flow: row wrap;
		justify-content: space-between;
	}
	h2.content-title {
		padding-bottom: 15px;
		margin-bottom: 30px;
		position: relative;
		&:after {
			content: "";
			background-color: #dfdfdf;
			height: 1px;
			width: 50px;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
	form,
	.preview {
		width: 50%;
		min-height: calc(100vh - 382px);
	}
	.preview {
		padding-left: 25px;
	}
	form {
		padding-right: 25px;
		position: relative;
		&:after {
			content: "";
			background-color: #dfdfdf;
			width: 1px;
			height: 100%;
			position: absolute;
			right: 0;
			top: 0;
		}
		input[type=text] {
			width: 100%;
			margin: 0;
			border: 1px solid #dfdfdf;
			padding: 10px;
			transition: .15s all linear;
			&:focus,
			&:active {
				outline: 1px solid black;
			}
		}
		.button-container {
			margin: 30px 0;
			display: flex;
			justify-content: space-between;
			input {
				text-transform: capitalize;
				transition: .15s all linear;
				background-color: white;
				color: black;
				border: 1px solid black;
				padding: 5px 40px;
				&.active {
					background-color: #efefef;
				}
			}
		}
		input[type=submit] {
			width: 100%;
			transition: .15s all linear;
			text-transform: capitalize;
			border: 1px solid black;
			padding: 10px 0;
			&:disabled {
				color: #dfdfdf;
				border-color: #dfdfdf;
				cursor: not-allowed;
			}
		}
	}

	input[type=button]:active,
	input[type=submit]:active {
		background-color: #f3f3f3;
	}
`;

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

export class AddContent extends Component {
	state = {
		content: '',
		type: '',
		newContent: '',
		newType: ''
	};

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		const dbRef = await fire.database().ref('/');
		dbRef.on('value', async (snapshot) => {
			const data = await snapshot.val();
			this.setState({ ...data, newContent: data.content, newType: data.type });
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { newContent, newType } = this.state;
		// Add error handling to make sure both fields are full
		postData(newContent, newType);
	};

	handleActiveClass = (e) => {
		const { type } = this.state;
		return 'test';
	};

	renderForm = () => {
		const { content, type, newType, newContent } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<h2 className="content-title">New Content</h2>
				<input
					type="text"
					name="newContent"
					defaultValue={content}
					onChange={this.handleChange}
					placeholder="Content - Paste YouTube url, image address, or redirect url"
				/>
				<div className="button-container">
					<input
						type="button"
						className={newType === 'picture' && 'active'}
						name="newType"
						value="picture"
						onClick={this.handleChange}
					/>
					<input
						type="button"
						className={newType === 'video' && 'active'}
						name="newType"
						value="video"
						onClick={this.handleChange}
					/>
					<input
						type="button"
						className={newType === 'website' && 'active'}
						name="newType"
						value="website"
						onClick={this.handleChange}
					/>
				</div>
				<input type="submit" disabled={!newType || !newContent} />
			</form>
		);
	};

	render() {
		const { content, type } = this.state;
		if (content && type) {
			return (
				<ContentAdder className="section">
					<Title title="Change QR Code Content" />
					<FadeInDiv>
						<div className="add-content">
							{this.renderForm()}
							<div className="preview">
								<h2 className="content-title">Preview</h2>
								<TattooContent content={this.state.newContent} type={this.state.newType} />
							</div>
						</div>
					</FadeInDiv>
				</ContentAdder>
			);
		} else {
			return (
				<ContentAdder className="section">
					<Title title="Change QR Code Content" />
					<FadeOutDiv>
						<LoadingContainer>
							<ClockLoader css={override} size={50} color={'#000000'} loading={true} />
						</LoadingContainer>
					</FadeOutDiv>
				</ContentAdder>
			);
		}
	}
}

export default AddContent;
