import React from 'react'
import styled from 'styled-components'

export default function HomeBio () {
  const HomeBio = styled.div`
    padding-top: 60px;
    margin: 0 auto;
    padding-bottom: 200px;
    border-bottom: 1px solid #dfdfdf;
    text-align: left;
    span.location {
      display: block;
      font-size: 20px;
      color: black;
      position: relative;
    }
    .home-header {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      .bio-main {
        letter-spacing: 2px;
        font-size: 30px;
        margin-bottom: 20px;
        line-height: 1.2;
        text-align: left;
        position: relative;
        padding-bottom: 20px;
        &:after {
          content: '';
          background-color: #dfdfdf;
          width: 50px;
          height: 1px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        span.name {
          font-weight: 700;
          // color: #274896;
          font-size: 50px;
          &::selection {
            // color: #274896;
          }
          &::-moz-selection {
            color: #274896;
          }
        }
      }
      .bio-secondary {
        line-height: 1.5;
        font-size: 18px;
      }
    }
    @media (max-width: 585px) {
      span.location {
        font-size: 16px;
      }
      padding-top: 25px;
      padding-bottom: 100px;
      .home-header {
        .bio-main {
          font-size: 30px;
          letter-spacing: initial;
          margin-bottom: 15px;
        }
      }
    }
    .bio-contact {
      text-align: left;
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
          <div>
            <span className='name'> Tyler Ackerman</span>
            <br /> Front End Developer
            <br />
            {/* <span className='location'>Toronto, Canada</span> */}
          </div>
        </div>
        <div className='bio-secondary'>
          <div>
            I create clean and modern web content, write about what's on my
            mind, laugh at things I find funny, and scream at the TV while I
            watch the Raptors.
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
