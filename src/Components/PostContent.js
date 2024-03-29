import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function PostContent(props) {
  const Paragraph = styled.div`
    margin: 14px 0;
    text-align: left;
    ${props.fontStyle && `font-style: ${props.fontStyle}`}
  `;
  return (
    <Paragraph className={`post-${props.type}`}>{props.content}</Paragraph>
  );
}

export function PostLink(props) {
  return (
    <div>
      <Link to={props.path}>{props.content}</Link>
    </div>
  );
}

const Subtitle = styled.h2`
  margin: 20px 0;
`;

export function PostSubtitle(props) {
  return (
    <div>
      <Subtitle>{props.content}</Subtitle>
    </div>
  );
}
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
    content: "";
    background-color: #dfdfdf;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export function PostBlockquote(props) {
  return (
    <div>
      <Blockquote>{props.content}</Blockquote>
    </div>
  );
}

const StyledPre = styled.pre`
  background-color: #dfdfdf;
  color: black;
  padding: 20px;
  font-size: 14px;
  line-height: 1.5;
`;

export function PostCode(props) {
  return (
    <StyledPre>
      <code>{props.content}</code>
    </StyledPre>
  );
}

const OrderedList = styled.ol`
  list-style-position: inside;
  li {
    list-style-type: upper-roman;
  }
`;

export function PostListOrdered(props) {
  return (
    <div>
      <OrderedList>
        {props.content.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </OrderedList>
    </div>
  );
}

const UnorderedList = styled.ul`
  list-style-position: inside;
  padding-left: 40px;
  li {
    list-style-type: square;
  }
`;

export function PostListUnordered(props) {
  return (
    <div>
      <UnorderedList>
        {props.content.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </UnorderedList>
    </div>
  );
}

export function PostPhoto(props) {
  const imageWidth = () => {
    switch (props.size) {
      case "sm":
        return "25%";
      case "md":
        return "50%";
      case "lg":
        return "100%";
      default:
        break;
    }
  };

  const PhotoContainer = styled.div`
    width: ${imageWidth()};
    margin: 30px 0;
  `;

  return (
    <PhotoContainer className={`post-picture post-picture-${props.size}`}>
      <img src={props.content} alt={props.altText} />
    </PhotoContainer>
  );
}
