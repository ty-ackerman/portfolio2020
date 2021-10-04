import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledItem = styled.div`
  border-bottom: 1px solid #dfdfdf;
  .one-post {
    padding: 15px 0;
    margin: 10px 0;
    display: flex;
    padding: 10px 10px;
  }
  .post-date {
    width: 45%;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .post-title {
    font-weight: 500;
    text-transform: capitalize;
  }
  .post-subtitle {
    margin-top: 5px;
    color: #656565;
    font-size: 14px;
  }
  @media (max-width: 700px) {
    .post-date {
      width: 30%;
    }
  }
  @media (max-width: 550px) {
    .one-post {
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      .post-title {
        font-size: 18px;
        font-weight: 400;
      }
      .post-date {
        color: #656565;
      }
    }
  }
  .imgContainer {
    display: flex;
    max-width: 30%;
  }
  .reminder {
    background-color: #fff2f2ed;
  }
  .titleContainer {
    width: 60%;
  }
`;

export default function JournalListItem(props) {
  const { entry, path, className } = props;

  const formatDate = (timeState) => {
    const date = new Date(parseInt(timeState));
    const dayMonthYear = date.toDateString();
    const [hour, minute, second] = date.toLocaleTimeString().split(":");
    const time = second.split(" ")[1];
    return `${dayMonthYear} at ${hour}:${minute}${time.toLowerCase()}`;
  };

  return (
    <StyledItem>
      <Link to={path}>
        <div className={`one-post ${className}`}>
          <div className="titleContainer">
            <div className="post-info post-title">{entry.title}</div>
            <div className="post-info post-subtitle">
              {formatDate(entry.time)}
            </div>
          </div>
          <div className="imgContainer">
            <img src={entry.picture} alt="" />
          </div>
        </div>
      </Link>
    </StyledItem>
  );
}
