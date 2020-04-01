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
        font-size: 100px;
        padding: 60px 0;
    }
    `;

	return (
		<Skills>
            <h2>I've Worked With</h2>
			<div className="skills-container">
				<div alt="hellooo"><FaReact /></div>
				<div><IoLogoJavascript/></div>
				<div><FaNodeJs/></div>
				<div><DiMongodb/></div>
				<div><FaJava/></div>
				<div><DiBackbone/></div>
				<div><FaPython/></div>
			</div>
		</Skills>
	);
}
