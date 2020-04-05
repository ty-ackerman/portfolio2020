import React from 'react';
import Title from './Title';
import styled from 'styled-components';

import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiMongodb, DiBackbone } from 'react-icons/di';

export default function Skills() {
	const Skills = styled.div`
		margin-top: 40px;
		h2 {
			font-size: 34px;
		}
		.skills-container {
			display: flex;
			justify-content: space-around;
			flex-flow: row wrap;
			font-size: 100px;
			padding: 60px 0;
		}

		@media (max-width: 1400px) {
			.skills-container {
				justify-content: space-between;
			}
		}

		@media (max-width: 1150px) {
			.skills-container {
				font-size: 80px;
				padding: 30px 0;
			}
		}

		@media (max-width: 700px) {
			.skills-container {
				font-size: 65px;
				padding: 20px 0;
			}
		}
		@media (max-width: 585px) {
			h2 {
				font-size: 30px;
			}
			.skills-container {
				justify-content: center;
				align-items: center;
				.js {
					display: none;
				}
				div {
					padding: 10px;
					width: 33.33%;
					font-size: 100px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		@media (max-width: 400px) {
			.skills-container {
				div {
					width: 50%;
				}
			}
		}
	`;

	return (
		<Skills>
			<h2>I've Worked With</h2>
			<div className="skills-container">
				<div>
					<FaReact />
				</div>
				<div className="js">
					<IoLogoJavascript />
				</div>
				<div>
					<FaNodeJs />
				</div>
				<div>
					<DiMongodb />
				</div>
				<div>
					<FaJava />
				</div>
				<div>
					<DiBackbone />
				</div>
				<div>
					<FaPython />
				</div>
			</div>
		</Skills>
	);
}
