import React from 'react';
import me from '../assets/me-grayscale.jpg';
import styled from 'styled-components';

export default function AboutText(props) {
	const aboutSections = [
		{
			titleType: 'image',
			titleContent: me,
			body: [
				'I’m a designer and developer born and bred in Norrland, and now living in Stockholm. I enjoy coffee, movies, long walks in nature, and music made before I was born (1991, that is).',
				'I’ve spent most of my career designing and developing websites and services. I’ve also worked with identity design, editorial design, and written for websites and magazines. I’m currently doing some freelance work while figuring out what comes next. Interested in working with me? Send me an email.',
				'When I’m not doing client work, I enjoy spending my time on various side projects. Since 2012, I’ve released 20 free WordPress themes that have been downloaded more than 3 million times and are used on hundreds of thousands of websites. In 2019, I designed and helped develop Twenty Twenty, the default theme in WordPress 5.3. I also run a WordPress glossary and Kaffeguide.se – a Swedish site about brewing coffee. I like to keep busy. And caffeinated.'
			]
		},
		{
			titleType: 'text',
			titleContent: 'Colophon',
			body: [
				'This site is running on WordPress with a custom theme called Reset. It’s not available for download, but Koji is somewhat similar in structure. The theme is designed with Sketch, developed with Visual Studio Code, version controlled on GitHub with the Tower Mac app, and hosted on Binero. Caching is handled by WP Super Cache.',
				'The site uses the lovely Söhne typeface, designed by Kris Sowersby of Klim Type Foundry.'
			]
		}
	];

	const renderTitle = (section) => {
		const { titleType, titleContent } = section;
		if (titleType === 'image') {
			return <img src={titleContent} alt="" />;
		} else {
			return titleContent;
		}
	};

	const renderBody = (section) => {
		const { body } = section;

		return body.map((paragraph, key) => {
			return (
				<div key={key} className="body about-me">
					{paragraph}
				</div>
			);
		});
	};

	const AboutContent = styled.div`
		margin-top: 55px;
		.about-container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
		.about-title {
			width: 350px;
			padding-right: 100px;
		}
		.about-body-container {
			font-size: 18px;
			width: calc(100% - 450px);
		}
		.body.about-me {
			margin-bottom: 20px;
		}
		.about-title {
			font-weight: 500;
			font-size: 19px;
		}
		.about-container:last-child {
			margin-top: 50px;
		}
	`;

	return (
		<AboutContent>
			{aboutSections.map((section, key) => {
				return (
					<div className="about-container">
						<div className="about-title" key={key}>
							{renderTitle(section)}
						</div>
						<div className="about-body-container">{renderBody(section)}</div>
					</div>
				);
			})}
		</AboutContent>
	);
}
