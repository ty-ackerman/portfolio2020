import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledItem = styled.div`
  border-bottom: 1px solid #dfdfdf;
  .one-post {
    padding: 25px 0;
    display: flex;
  }
  .post-date {
    width: 45%;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  .post-title {
    font-weight: 500;
  }
  .post-subtitle {
    margin-top: 5px;
    font-style: italic;
    color: #656565;
  }
  @media (max-width: 700px) {
    .post-date {
      width: 30%;
    }
  }
  @media (max-width: 550px) {
    .one-post {
      flex-flow: column-reverse wrap;
      .post-subtitle {
        display: none;
      }
      .post-title {
        font-size: 18px;
        font-weight: 400;
      }
      .post-date {
        color: #656565;
      }
    }
  }
`;

export default function WritingListItem({ post }) {
  const { path } = post;

  return (
    <StyledItem>
      <Link to={`writing/post?id=${path}`}>
        <div className="one-post">
          <div className="post-info post-date">{post.dateShort}</div>
          <div>
            <div className="post-info post-title">{post.title}</div>
            <div className="post-info post-subtitle">{post.description}</div>
          </div>
        </div>
      </Link>
    </StyledItem>
  );
}
