import React from 'react';
import logo from '../assets/ta-logo.png';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { NavLink } from 'react-router-dom';

export default function Header() {
	const HeaderWrapper = styled.header`
		padding: 50px 40px;
		padding-right: 0;
		position: fixed;
		bottom: 0;
		top: 0;
		left: 0;
		width: 300px;
		display: flex;
		.header-inner {
			border-right: 1px solid #dfdfdf;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			width: 100%;
			padding: 40px 40px;
		}

		.logo-container {
			max-width: 75px;
		}
		img {
			max-width: 100%;
		}
		nav {
			padding: 80px 0;
			ul {
				font-size: 18px;
				li {
					list-style-type: none;
					margin-bottom: 18px;
				}
			}
		}

		.social-icons {
			display: flex;
			height: 50px;
			padding-top: 25px;
			align-items: center;
			justify-content: space-between;
			width: 130px;
			font-size: 25px;
		}
	`

	return (
		<HeaderWrapper>
			<div className="header-inner">
				<div className="logo-container">
					<NavLink to="/">
						<img src={logo} alt="" />
					</NavLink>
				</div>
				<nav className="menu-items">
					<ul>
						<li>
							<NavLink activeClassName="is-active" to="/about">About</NavLink>
						</li>
						<li>
							<NavLink activeClassName="is-active" to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink activeClassName="is-active" to="/writing">Writing</NavLink>
						</li>
					</ul>
				</nav>
				<div className="social-icons">
					<div className="fa-icon instagram">
						<a href="https://www.instagram.com/ty.ackerman/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
					</div>
					<div className="fa-icon linkedin">
						<a href="https://www.linkedin.com/in/tyler-ackerman-b8b564163/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
					</div>
					<div className="fa-icon email ">
						<a href="mailto:me@tylerackerman.io?subject=Sweet Website Ty!"><FontAwesomeIcon icon={faEnvelope} /></a>
					</div>
				</div>
			</div>
		</HeaderWrapper>
	);
}

