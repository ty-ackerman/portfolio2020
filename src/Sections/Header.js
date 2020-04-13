import React from 'react'
import logo from '../assets/ta-logo.png'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { NavLink } from 'react-router-dom'

export default function Header () {
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

    @media (min-width: 1450px) {
      width: 400px;
      padding: 50px 60px;
    }

    @media (max-width: 1000px) {
      padding: 40px 0;
      margin: 0 80px;
      width: calc(100% - 160px);
      display: block;
      bottom: inherit;
      top: 0;
      position: relative;
      .social-icons {
        display: none;
      }
      .header-inner {
        border: none;
        flex-direction: row-reverse;
        align-items: center;
        padding: 0;
      }
      .logo-container {
        width: 60px;
      }
      nav {
        padding: 0;
        ul {
          display: flex;
          flex-direction: row;
          width: 250px;
          margin: 0;
          justify-content: space-between;
          li {
            margin: 0;
          }
        }
      }
    }
    @media (max-width: 770px) {
      margin: 0 40px;
      width: calc(100% - 80px);
    }
    @media (max-width: 500px) {
      margin: 0 30px;
      width: calc(100% - 60px);
      nav ul {
        width: 215px;
      }
    }
    @media (max-width: 380px) {
      nav ul {
        width: 175px;
        font-size: 16px;
      }
    }
  `

  return (
    <HeaderWrapper>
      <div className='header-inner'>
        <div className='logo-container'>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>
        </div>
        <nav className='menu-items'>
          <ul>
            <li>
              <NavLink activeClassName='is-active' to='/about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='is-active' to='/projects'>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='is-active' to='/writing'>
                Writing
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className='social-icons'>
          <div className='fa-icon instagram'>
            <a
              href='https://www.instagram.com/ty.ackerman/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className='fa-icon linkedin'>
            <a
              href='http://www.linkedin.com/in/ty-ackerman'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className='fa-icon email '>
            <a href='mailto:me@tylerackerman.io?subject=Sweet Website Ty!'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}
