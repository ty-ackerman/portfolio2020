import React from "react";
import styled from "styled-components";

const PostTitleContainer = styled.div`
  h1 {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  .subtitle {
    color: #797979;
    padding-top: 10px;
    position: relative;
    &:before {
      height: 1px;
      width: 40px;
      content: "";
      background-color: #dfdfdf;
      position: absolute;
      top: 0;
    }
  }
  .post-header {
    margin-bottom: 45px;
  }
  .post-contents {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
`;

export default function PostTitle({ title, subtitle }) {
  return (
    <PostTitleContainer>
      <div className="post-contents post-header">
        <h1 className="title">{title}</h1>
        <div className="subtitle">{subtitle}</div>
      </div>
    </PostTitleContainer>
  );
}
