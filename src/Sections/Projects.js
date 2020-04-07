import React, { useEffect } from 'react'
import Title from '../Components/Title'
import Fade from '../Components/Fade'

export default function Projects () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Fade show>
      <div className='section'>
        <Title title='Projects' />
        <div style={{ marginTop: '40px' }}>Under construction ...</div>
      </div>
    </Fade>
  )
}
