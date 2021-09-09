import React, { useEffect } from 'react'
import HomeBio from '../Components/HomeBio'
import Skills from '../Components/Skills'
import RecentWriting from '../Components/RecentWriting'
import styled from 'styled-components'
import Fade from '../Components/Fade'


const HomeSection = styled.div`
    position: relative;
  `

export default function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <Fade show>
      <HomeSection className='section'>
        <HomeBio />
        <Skills />
        <RecentWriting />
      </HomeSection>
    </Fade>
  )
}
