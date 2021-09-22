import React from "react";

import Posts from "../writing/Posts.json";
import WritingListItem from "./WritingListItem";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "./Title";

export default function RecentWriting() {
  const renderWriting = (Posts) => {
    // Filter hidden articles
    if (!Posts) return;
    const filteredPosts = Posts.filter((post) => !post.hidden);
    const recentPosts =
      filteredPosts.length >= 3 ? filteredPosts.slice(0, 3) : filteredPosts;
    return recentPosts.map((post) => {
      return <WritingListItem key={post.path} post={post} />;
    });
  };

  const RecentWriting = styled.div`
    margin-top: 40px;
    .see-more {
      padding: 20px 0;
      text-align: left;
      height: 50px;
      display: flex;
      align-items: center;
    }
  `;

  return (
    <RecentWriting>
      <Title title="Recent Writing" />
      {renderWriting(Posts)}
      <div className="see-more">
        <Link to="/writing">View all writing</Link>
      </div>
    </RecentWriting>
  );
}
