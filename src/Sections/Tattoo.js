import React, {Component} from 'react';
import Title from '../Components/Title';
import { Link } from 'react-router-dom';
import { PostContent, PostSubtitle } from '../Components/PostContent';
import fire from '../Components/fire'
import styled from 'styled-components';
import {isEmpty} from "lodash"

const description =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis ducimus in nostrum, et aspernatur architecto voluptatum facere a nesciunt! Quia dolor hic error minima doloribus? Doloremque laudantium tenetur porro?';

const subtitle = 'So What Does It Scan To?';

export default class Tattoo extends Component {
	constructor() {
		super();
		this.state = {
			content: '',
			type: ''
		}
	}

	async componentDidMount() {
		window.scrollTo(0, 0);
		await this.getData()
	}
	
	getData = async () => {
		const dbRef = await fire.database().ref('/');
		dbRef.on('value', async (snapshot) => {
			const data = await snapshot.val();
			this.setState(data)
		})
	}

	renderData = () => {
		if (this.state.content && this.state.type) {
			return <img src={this.state.content} />
			
		} else {
			return "Loading ..."
		}
	}


	render() {
		return (
			<div className="section">
				<div className="post-contents">
					<Title title="My QR Code Tattoo" subtitle="My ridiculous permanent decision." />
					<PostContent content={description} />
					<PostSubtitle content={subtitle} />
					{this.renderData()}
					To learn more about the tattoo, <Link to="/writing/post?id=tattoo">click here</Link>.
				</div>
			</div>
		);

	}
}