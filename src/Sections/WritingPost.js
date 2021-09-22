import React, { useEffect, useState } from "react";
import get from "lodash/get";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { isEmpty } from "lodash";
import Fade from "../components/Fade";

import {
  PostContent,
  PostPhoto,
  PostSubtitle,
  PostListOrdered,
  PostListUnordered,
  PostBlockquote,
  PostCode,
  PostLink,
} from "../components/PostContent";
import styled from "styled-components";

import Posts from "../writing/Posts.json";
import PostTitle from "../components/PostTitle";

function WritingPost(props) {
  const [posts, setPosts] = useState({});
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost();
    window.scrollTo(0, 0);
  });

  const getPost = () => {
    const postId = queryString.parse(props.location.search);
    const indexedPosts = Posts.map((post, key) => {
      post.index = key;
      return post;
    });
    const currPost = indexedPosts.filter((post) => post.path === postId.id);
    setPost(...currPost);
    setPosts(Posts);
  };

  const renderContent = (section, key) => {
    switch (section.type) {
      case "paragraph":
        return <PostContent key={key} {...section} />;
      case "photo":
        return <PostPhoto key={key} {...section} />;
      case "subtitle":
        return <PostSubtitle key={key} {...section} />;
      case "ol":
        return <PostListOrdered key={key} {...section} />;
      case "ul":
        return <PostListUnordered key={key} {...section} />;
      case "blockquote":
        return <PostBlockquote key={key} {...section} />;
      case "code":
        return <PostCode key={key} {...section} />;
      case "link":
        return <PostLink key={key} {...section} />;
      default:
        break;
    }
  };

  const WritingPostContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    position: relative;
    ${!post.hidden && "padding-bottom: 150px;"}
    .post-contents {
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
    }

    .change-post {
      display: flex;
      justify-content: ${(props) =>
        post.index === 0 || get(props, `posts.[${post.index - 1}.hidden]`)
          ? "flex-end"
          : "space-between"};
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
  `;

  const loadNewPost = (postPath) => {
    props.history.push(`/writing/post?id=${postPath}`);
  };

  if (posts)
    return (
      <Fade show>
        <WritingPostContainer className="section" posts={posts}>
          <PostTitle title={post.title} subtitle={post.dateLong} />
          <div className="post-contents">
            {!isEmpty(post) &&
              post.sections.map((section, key) => renderContent(section, key))}
          </div>
          {!post.hidden && (
            <div className="change-post">
              {post.index > 0 && !posts[post.index - 1].hidden && (
                <div
                  className="previous"
                  onClick={() => loadNewPost(posts[post.index - 1].path)}
                >
                  <div className="change-title">Previous</div>
                  <div className="change-post-name">
                    {posts[post.index - 1].title}
                  </div>
                </div>
              )}
              {post.index < posts.length - 1 && (
                <div
                  className="next"
                  onClick={() => loadNewPost(posts[post.index + 1].path)}
                >
                  <div className="change-title">Next</div>
                  <div className="change-post-name">
                    {posts[post.index + 1].title}
                  </div>
                </div>
              )}
            </div>
          )}
        </WritingPostContainer>
      </Fade>
    );
  return null;
}

export default withRouter(WritingPost);
