import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { isEmpty } from 'lodash'
import Fade from '../Components/Fade'

import {
  PostContent,
  PostPhoto,
  PostSubtitle,
  PostListOrdered,
  PostListUnordered,
  PostBlockquote
} from '../Components/PostContent'
import styled from 'styled-components'

import Posts from '../Writing/Posts.json'

function WritingPost (props) {
  const [posts, setPosts] = useState({})
  const [post, setPost] = useState({})

  useEffect(() => {
    getPost()
    window.scrollTo(0, 0)
  })

  const getPost = () => {
    const postId = queryString.parse(props.location.search)
    const indexedPosts = Posts.map((post, key) => {
      post.index = key
      return post
    })
    const currPost = indexedPosts.filter(post => post.path === postId.id)
    setPost(...currPost)
    setPosts(Posts)
  }

  const renderContent = (section, key) => {
    switch (section.type) {
      case 'paragraph':
        return <PostContent key={key} {...section} />
      case 'photo':
        return <PostPhoto key={key} {...section} />
      case 'subtitle':
        return <PostSubtitle key={key} {...section} />
      case 'ol':
        return <PostListOrdered key={key} {...section} />
      case 'ul':
        return <PostListUnordered key={key} {...section} />
      case 'blockquote':
        return <PostBlockquote key={key} {...section} />
    }
  }

  const WritingPost = styled.div`
    display: flex;
    flex-flow: column wrap;
    position: relative;
    padding-bottom: 150px;
    .post-contents {
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
    }
    h1 {
      font-size: 35px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .date {
      color: #797979;
      padding-top: 10px;
      position: relative;
      &:before {
        height: 1px;
        width: 40px;
        content: '';
        background-color: #dfdfdf;
        position: absolute;
        top: 0;
      }
    }
    .post-header {
      margin-bottom: 45px;
    }
    .change-post {
      display: flex;
      justify-content: ${post.index === 0 ? 'flex-end' : 'space-between'};
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .next,
    .previous {
      width: 20%;
      min-width: 120px;
      cursor: pointer;
      padding-top: 20px;
      position: relative;
      margin-top: 80px;
      border-top: 1px solid #dfdfdf;
      max-height: 100px;
      .change-title {
        color: #797979;
      }
      transition: all 0.15s linear;
      &:hover .change-post-name {
        text-decoration: underline;
      }
    }
    .next {
      text-align: right;
    }
  `

  const loadNewPost = postPath => {
    // getPost();
    props.history.push(`/writing/post?id=${postPath}`)
  }

  return (
    <Fade show>
      <WritingPost className='section'>
        <div className='post-contents post-header'>
          <h1 className='title'>{post.title}</h1>
          <div className='date'>{post.dateLong}</div>
        </div>
        <div className='post-contents'>
          {!isEmpty(post) &&
            post.sections.map((section, key) => renderContent(section, key))}
        </div>
        <div className='change-post'>
          {post.index > 0 && (
            <div
              className='previous'
              onClick={() => loadNewPost(posts[post.index - 1].path)}
            >
              <div className='change-title'>Previous</div>
              <div className='change-post-name'>
                {posts[post.index - 1].title}
              </div>
            </div>
          )}
          {post.index < posts.length - 1 && (
            <div
              className='next'
              onClick={() => loadNewPost(posts[post.index + 1].path)}
            >
              <div className='change-title'>Next</div>
              <div className='change-post-name'>
                {posts[post.index + 1].title}
              </div>
            </div>
          )}
        </div>
      </WritingPost>
    </Fade>
  )
}

export default withRouter(WritingPost)
