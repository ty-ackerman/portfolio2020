import React, { Component } from 'react';
import Title from '../Components/Title';
import { Link } from 'react-router-dom';
import { PostContent, PostSubtitle } from '../Components/PostContent';
import fire from '../Components/fire';
import TattooContent from '../Components/TattooContent';

const description =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis ducimus in nostrum, et aspernatur architecto voluptatum facere a nesciunt! Quia dolor hic error minima doloribus? Doloremque laudantium tenetur porro?';

const subtitle = 'So What Does It Scan To?';

export default class Tattoo extends Component {
	constructor() {
		super();
		this.state = {
			content: '',
			type: '',
			fullScreen: true
		};
	}

	async componentDidMount() {
		window.scrollTo(0, 0);
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this.setState({ fullScreen: true });
		} else {
			this.setState({ fullScreen: false });
		}
		await this.getData();
	}

	getData = async () => {
		const dbRef = await fire.database().ref('/');
		dbRef.on('value', async (snapshot) => {
			const data = await snapshot.val();
			this.setState(data);
		});
	};

	handleClick = () => {
		this.state.fullScreen && this.setState({ fullScreen: false });
	};

	render() {
		const { fullScreen } = this.state;
		return (
			<div className="section" onClick={this.handleClick}>
				<div className="post-contents">
					{!fullScreen && <Title title="My QR Code Tattoo" subtitle="My ridiculous permanent decision." />}
					{!fullScreen && <PostContent content={description} />}
					{!fullScreen && <PostSubtitle content={subtitle} />}
					<TattooContent content={this.state.content} type={this.state.type} />
					{!fullScreen && (
						<div>
							To learn more about the tattoo, <Link to="/writing/post?id=tattoo">click here</Link>.
						</div>
					)}
				</div>
			</div>
		);
	}
}
