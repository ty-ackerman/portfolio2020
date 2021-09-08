import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Footer() {
	const Footer = styled.footer`
		margin-top: 50px;
		margin-left: 340px;
		margin-right: 40px;
		padding-top: 10px;
		padding-bottom: 30px;
		border-top: 1px solid #dfdfdf;
		ul {
			display: flex;
			margin-bottom: 12px;
			li {
				margin-right: 20px;
			}
		}
		.footer-bottom {
			color: #656565;
			font-size: 12px;
		}
		@media (min-width: 1450px) {
			margin-left: 380px;
		}
		@media (max-width: 1000px) {
			margin: 50px 80px 0px 80px;
		}
		@media (max-width: 770px) {
			margin: 50px 40px 0px 40px;
		}
		@media (max-width: 500px) {
			margin: 50px 30px 0px 30px;
		}
	`;

	return (
		<Footer>
			<div className="footer-top">
				<ul>
					<a href="mailto:me@tylerackerman.io?subject=Sweet Website Ty!">
						<li>Contact</li>
					</a>
					<a
						href="https://drive.google.com/file/d/1Xms9zB7_elAFCUmyXuU5GD70D1qKsaY3/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li>Resume</li>
					</a>
					<NavLink activeClassName="is-active" to="/tattoo/info">
						<li>Tattoo</li>
					</NavLink>
				</ul>
			</div>
			<div className="footer-bottom">Tyler Ackerman 2018-2021</div>
		</Footer>
	);
}
