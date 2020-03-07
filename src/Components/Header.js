import React from 'react';
import logo from '../assets/ta-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
	return (
		<header>
			<div className="logo-container">
				<img src={logo} alt="" />
			</div>
			<nav className="menu-items">
				<ul>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
				</ul>
			</nav>
			<div className="social-icons">
				<div className="fa-icon instagram"><FontAwesomeIcon icon={faInstagram} style={{color: "red"}}/></div>
				<div className="fa-icon linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></div>
				<div className="fa-icon email "><FontAwesomeIcon icon={faEnvelope} /></div>
			</div>
		</header>
	);
}
