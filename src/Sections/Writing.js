import React, { useEffect } from 'react'
import Title from '../Components/Title'
import Fade from '../Components/Fade'
import Posts from '../Writing/Posts.json'
import WritingListItem from '../Components/WritingListItem'

import styled from 'styled-components'

const WritingContainer = styled.div``

export default function Writing () {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Fade show>
      <WritingContainer className='section'>
        <Title
          title='Writing'
          subtitle='Notes about life, work, and everything in between.'
        />
        {Posts.map(post => {
          return !post.hidden && <WritingListItem key={post.path} post={post} />
        })}
      </WritingContainer>
    </Fade>
  )
}
