import React from 'react'
import me from '../assets/me-grayscale.jpg'
import styled from 'styled-components'

export default function AboutText (props) {
  const aboutSections = [
    {
      titleType: 'image',
      titleContent: me,
      body: [
        'I’m a front-end web developer based out of Toronto, Canada. In addition to my full-time work with Amdocs, I enjoy freelancing, writing, and researching on the side. This webpage was created to showcase some of my latest projects and to share some of my hotter takes with the world.',

        'In the summer of 2017, I graduated from Wilfrid Laurier University with a degree in Business Administration and a graduate diploma in Accounting. Less than a year later, I completed a full-time web development program with Juno College of Technology and landed my dream job as a UI Developer with Scotiabank.',

        "I’m a strong believer in giving back to the community that helped raise you. Since graduating, I’ve accepted several different positions with the career college; including roles in student mentorship, in-class instructor assistance, and assignment marking. Most recently, I have been selected as a recurring guest speaker - providing career advice for recent grads.",

        'Aside from coding, I’m a die-hard Toronto Raptors fan. I bleed red, literally and figuratively. To answer your question, yes, June 2019 was the best month of my life. During the NBA offseason, I take every opportunity I can to travel the globe. I’ve been fortunate enough to visit some pretty neat places. Last but not least, no About Me section is complete without mentioning my two lovely dogs, Barkley and Cooper.'
      ]
    },
    {
      titleType: 'text',
      titleContent: 'Colophon',
      body: [
        'This site is currently running on React, built using the Create React App toolchain. I also utilized the Styled Components package to help create custom styling. For the design, I took inspiration from a ton of different minimalistic webpages I’ve seen over the past couple years. I was aiming for something clean, simple, and modern.'
      ]
    }
  ]

  const renderTitle = section => {
    const { titleType, titleContent } = section
    if (titleType === 'image') {
      return <img src={titleContent} alt='' />
    } else {
      return titleContent
    }
  }

  const renderBody = section => {
    const { body } = section

    return body.map((paragraph, key) => {
      return (
        <div key={key} className='body about-me'>
          {paragraph}
        </div>
      )
    })
  }

  const AboutContent = styled.div`
    margin-top: 55px;
    .about-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .about-title {
      width: 350px;
      padding-right: 100px;
    }
    .about-body-container {
      font-size: 18px;
      width: calc(100% - 450px);
      text-align: left;
    }
    .body.about-me {
      margin-bottom: 20px;
    }
    .about-title {
      font-weight: 500;
      font-size: 19px;
    }
    .about-container:last-child {
      margin-top: 50px;
    }

    @media (max-width: 1400px) {
      .about-title {
        padding-right: 50px;
        width: 300px;
      }
      .about-body-container {
        width: calc(100% - 350px);
      }
    }

    @media (max-width: 1150px) {
      .about-title {
        padding-right: 50px;
        width: 250px;
      }
      .about-body-container {
        width: calc(100% - 250px);
      }
    }

    @media (max-width: 700px) {
      .about-container {
        flex-direction: column;
      }
      .about-title {
        padding-right: 50px;
        width: 250px;
        margin-bottom: 20px;
      }
      .about-body-container {
        width: 100%;
      }
      .about-container:last-child {
        margin-top: 20px;
      }
    }

    @media (max-width: 480px) {
      .about-title {
        width: 100%;
        padding: 0;
      }
    }
  `

  return (
    <AboutContent>
      {aboutSections.map((section, key) => {
        return (
          <div className='about-container'>
            <div className='about-title' key={key}>
              {renderTitle(section)}
            </div>
            <div className='about-body-container'>{renderBody(section)}</div>
          </div>
        )
      })}
    </AboutContent>
  )
}
