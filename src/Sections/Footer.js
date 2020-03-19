import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export default function Footer() {

    const Footer = styled.footer`
        margin-top: 100px;
        margin-left: 380px;
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
    `

    return (
        <Footer>
            <div className="footer-top">
                <ul>
                    <a href="mailto:me@tylerackerman.io?subject=Sweet Website Ty!"><li>Contact</li></a>
                    <a href="https://www.google.com"><li>Resume</li></a>
                    <NavLink activeClassName="is-active" to="/tattoo"><li>Tattoo</li></NavLink>
                </ul>
            </div>
            <div className="footer-bottom">
                Ty Ackerman 2018-2020
            </div>
        </Footer>
    )
}
