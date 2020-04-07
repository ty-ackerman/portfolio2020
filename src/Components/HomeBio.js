import React from 'react'
import styled from 'styled-components'

export default function HomeBio () {
  const HomeBio = styled.div`
    padding-top: 60px;
    margin: 0 auto;
    padding-bottom: 200px;
    border-bottom: 1px solid #dfdfdf;
    .home-header {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      .bio-main {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 30px;
        line-height: 1.2;
        span {
          color: #3868d8;
          &::selection {
            color: #3868d8;
          }
          &::-moz-selection {
            color: #3868d8;
          }
        }
      }
      .bio-secondary {
        line-height: 1.5;
        font-size: 18px;
      }
    }
    @media (max-width: 585px) {
      padding-top: 25px;
      padding-bottom: 100px;
      .home-header {
        .bio-main {
          font-size: 32px;
          margin-bottom: 15px;
        }
      }
    }
    .bio-contact {
      margin-top: 15px;
      a {
        text-decoration: underline;
      }
    }
  `

  return (
    <HomeBio>
      <div className='home-header'>
        <div className='bio-main'>
          Hi! My name is {window.innerWidth < 580 && <br />}
          <span>Ty Ackerman</span>.{window.innerWidth > 580 && <br />}{' '}
          {window.innerWidth > 580 && ' '} I'm a web developer from Toronto.
        </div>
        <div className='bio-secondary'>
          <div>
            Welcome to the window to my world. I'm a simple man. I create clean
            and modern content, write about what's on my mind, laugh at things I
            find funny, and scream at the TV while I watch the Raptors.
          </div>
          <div className='bio-contact'>
            Like what you see?{' '}
            <a href='mailto:me@tylerackerman.io?subject=Sweet Website Ty!'>
              Get in touch
            </a>
            .
          </div>
        </div>
      </div>
    </HomeBio>
  )
}
