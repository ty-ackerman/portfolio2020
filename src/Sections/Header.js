import React from 'react';
import logo from '../assets/ta-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div className="logo-container">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<nav className="menu-items">
				<ul>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/writing">Writing</Link>
					</li>
				</ul>
			</nav>
			<div className="social-icons">
				<div className="fa-icon instagram">
					<FontAwesomeIcon icon={faInstagram} />
				</div>
				<div className="fa-icon linkedin">
					<FontAwesomeIcon icon={faLinkedinIn} />
				</div>
				<div className="fa-icon email ">
					<FontAwesomeIcon icon={faEnvelope} />
				</div>
			</div>
		</header>
	);
}
