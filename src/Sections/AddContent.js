import React, { Component } from 'react';
import { postData } from '../Components/fire';
import Title from '../Components/Title';
import fire from '../Components/fire';
import { css } from '@emotion/core';
import TattooContent from '../Components/TattooContent';
import ClockLoader from 'react-spinners/ClockLoader';
import styled, { keyframes } from 'styled-components';
import { fadeOut, fadeIn } from 'react-animations';
import {withRouter} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';

const ContentAdder = styled.div`
	.add-content {
		display: flex;
		margin-top: 40px;
		flex-flow: row wrap;
		justify-content: space-between;
		@media (max-width: 900px) {
			flex-flow: column wrap;
			form,
			.preview {
				width: 100%;
			}
		}
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
		@media (min-width: 900px) {
			min-height: calc(100vh - 382px);
		}
	}
	.preview {
		@media (min-width: 900px) {
			padding-left: 25px;
		}
		@media (max-width: 900px) {
			padding-top: 50px;
		}
	}
	form {
		@media (min-width: 900px) {
			padding-right: 25px;
		}
		@media (max-width: 900px) {
			padding-bottom: 50px;
		}
		position: relative;
		&:after {
			content: "";
			background-color: #dfdfdf;
			position: absolute;
			@media (min-width: 900px) {
				width: 1px;
				height: 100%;
				right: 0;
				top: 0;
			}
			@media (max-width: 900px) {
				height: 1px;
				width: 100%;
				left: 0;
				bottom: 0;
			}
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
			@media (min-width: 1600px) {
				font-size: 20px;
			}
			input {
				text-transform: capitalize;
				transition: .15s all linear;
				background-color: white;
				color: black;
				border: 1px solid black;

				@media (min-width: 1301px) {
					padding: 5px 40px;
				}
				@media (max-width: 1300px) {
					padding: 5px 30px;
				}
				@media (max-width: 1150px) {
					padding: 5px 20px;
				}
				@media (max-width: 1000px) {
					padding: 5px 30px;
				}
				@media (max-width: 420px) {
					padding: 5px 20px;
				}
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
			@media (min-width: 1600px) {
				font-size: 20px;
			}
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

	.MuiSnackbar-root .MuiPaper-root {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

	.clear-input {
		background-color: white;
		height: 40px;
		width: 48px;
		position: absolute;
		right: 10px;
		top: 83px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		font-weight: 700
		-webkit-text-stroke-width: 1px;
  		-webkit-text-stroke-color: white;
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
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}
	state = {
		content: '',
		type: '',
		newContent: '',
		newType: '',
		openSnackbar: false,
		displayClear: false
	};

	componentDidMount() {
		window.scrollTo(0, 0)
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
		this.setState({openSnackbar: true})
		setTimeout(() => {
			this.handleClose()
			setTimeout(() => {
				this.props.history.push('/tattoo/info')
			}, 200)
		}, 1500);
	};
	handleClose = () => {
    	this.setState({ openSnackbar: false });
  	};

	shouldBlur = (e) => {
		if (e.keyCode === 13) {
			e.target.blur();
    	}
	}

	clearInput = (e) => {
		e.preventDefault()
		this.textInput.current.value = "";
		this.setState({displayClear: false, newContent: ""})
	}

	displayClear = () => {
		if (
      		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        	navigator.userAgent
      		)
    	) {
			this.setState({displayClear: true})
		}
	}

	renderForm = () => {
		const { content, type, newType, newContent, displayClear } = this.state;
		return (
			<form onSubmit={this.handleSubmit} id="add-content-form">
				<h2 className="content-title">New Content</h2>
				{displayClear && <button className="clear-input" onClick={this.clearInput}>Clear</button>}
				<input
					type="text"
					name="newContent"
					defaultValue={content}
					onChange={this.handleChange}
					onFocus={this.displayClear}
					placeholder="Content - Paste YouTube url, image address, or redirect url"
					onKeyDown={this.shouldBlur}
					ref={this.textInput}
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
						      <Snackbar
								anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
								open={this.state.openSnackbar}
								onClose={this.handleClose}
								message="New content saved successfully."
							/>
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

export default withRouter(AddContent);
