import React from 'react'
import styled from 'styled-components'

export function PostContent (props) {
  const Paragraph = styled.div`
    margin: 14px 0;
    text-align: left;
    ${props.fontStyle && `font-style: ${props.fontStyle}`}
  `
  return <Paragraph className={`post-${props.type}`}>{props.content}</Paragraph>
}

export function PostSubtitle (props) {
  const Subtitle = styled.h2`
    margin: 20px 0;
  `

  return (
    <div>
      <Subtitle>{props.content}</Subtitle>
    </div>
  )
}

export function PostBlockquote (props) {
  const Blockquote = styled.div`
    margin: 20px 0;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    font-style: italic;
    text-align: left;
    &:before {
      width: 1px;
      height: calc(100% - 10px);
      content: '';
      background-color: #dfdfdf;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  `

  return (
    <div>
      <Blockquote>{props.content}</Blockquote>
    </div>
  )
}

export function PostCode (props) {
  const StyledPre = styled.pre`
    background-color: #dfdfdf;
    color: black;
    padding: 20px;
    font-size: 14px;
    line-height: 1.5;
  `

  return (
    <StyledPre>
      <code>{props.content}</code>
    </StyledPre>
  )
}

export function PostListOrdered (props) {
  const OrderedList = styled.ol`
    list-style-position: inside;
    li {
      list-style-type: upper-roman;
    }
  `

  return (
    <div>
      <OrderedList>
        {props.content.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </OrderedList>
    </div>
  )
}

export function PostListUnordered (props) {
  const UnorderedList = styled.ul`
    list-style-position: inside;
    padding-left: 40px;
    li {
      list-style-type: square;
    }
  `

  return (
    <div>
      <UnorderedList>
        {props.content.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </UnorderedList>
    </div>
  )
}

export function PostPhoto (props) {
  const imageWidth = () => {
    switch (props.size) {
      case 'sm':
        return '25%'
      case 'md':
        return '50%'
      case 'lg':
        return '100%'
      default:
        break
    }
  }

  const PhotoContainer = styled.div`
    width: ${imageWidth()};
    margin: 30px 0;
  `

  return (
    <PhotoContainer className={`post-picture post-picture-${props.size}`}>
      <img src={props.content} alt={props.altText} />
    </PhotoContainer>
  )
}
