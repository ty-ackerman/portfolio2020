import React, { Component } from "react";
import { Link } from "react-router-dom";
import fire from "../components/fire";
import Fade from "../components/Fade";
import TattooContent from "../components/TattooContent";
import { Swipeable } from "react-swipeable";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const content =
  "The hardest part about getting a tattoo is choosing a permanent design. My solution - a QR code that scans to the content of my choosing by linking it to my personal website. To put it more simply, I can change what the code displays with only a few clicks.";

const title = "QR Code Tattoo";
const description = "Permanent Design - Temporary Content";

const PostContentsStyled = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    flex-direction: column;
    }
  }
  .left,
  .right {
    width: 50%;
    @media (max-width: 850px) {
      width: 100%;
    }
  }
  h2 {
    margin-top: 20px;
  }

  .left {
    padding-right: 20px;
    display: flex;
    flex-flow: column wrap;
    font-size: 18px;
    @media (max-width: 1100px) {
      font-size: 16px;
      h2 {
        font-size: 30px;
      }
      h3 {
        font-size: 20px;
      }
    }
    @media (max-width: 850px) {
      padding-right: 0;
    }
    h2 {
      margin-top: 20px;
      font-size: 36px;
    }
    h3 {
      font-weight: 400;
      font-size: 22px;
      position: relative;
      padding-bottom: 15px;
      margin-bottom: 5px;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 50px;
        height: 1px;
        background-color: #dfdfdf;
        left: 0;
      }
    }
    .content-info {
      padding: 15px 0;
      @media(max-width: 850px) {
        text-align: left;
      }
    }
    .learn-more {
      margin-top: 50px;
      margin-bottom: 20px;
      @media (max-width: 850px) {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      a {
        text-decoration: underline;
      }
    }
  }
  .right {
    padding-left: 20px;
        @media (max-width: 850px) {
      padding-left: 0;
    }
  }
`;

const SectionStyled = styled.div`
  display: flex;
`;

export class Tattoo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      type: "",
      fullScreen: true,
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ fullScreen: true });
    } else {
      this.setState({ fullScreen: false });
    }
    await this.getData();
  }

  getData = async () => {
    const dbRef = await fire.database().ref("/");
    dbRef.on("value", async (snapshot) => {
      const data = await snapshot.val();
      this.setState({ ...data });
    });
  };

  handleSwipe = () => {
    this.props.history.push("/tattoo/add");
  };

  handleClick = () => {
    this.state.fullScreen && this.setState({ fullScreen: false });
  };

  render() {
    const { fullScreen } = this.state;
    const { redirect } = this.props;

    if (fullScreen && redirect) {
      return (
        <Swipeable onSwipedLeft={(eventData) => this.handleSwipe()}>
          <Fade show>
            <div className="section" onClick={this.handleClick}>
              <div className="post-contents">
                <TattooContent
                  content={this.state.content}
                  type={this.state.type}
                  redirect={this.props.redirect}
                />
              </div>
            </div>
          </Fade>
        </Swipeable>
      );
    }
    return (
      <Swipeable onSwipedLeft={(eventData) => this.handleSwipe()}>
        <Fade show>
          <SectionStyled className="section" onClick={this.handleClick}>
            <PostContentsStyled>
              <div className="left">
                <h2>{title}</h2>
                <h3>{description}</h3>
                <div className="content-info">{content}</div>
                <div className="learn-more">
                  <div className="div">
                    To learn more about the tattoo,{" "}
                    <Link to="/writing/post?id=tattoo">click here</Link>.
                  </div>
                </div>
              </div>
              <div className="right">
                <TattooContent
                  content={this.state.content}
                  type={this.state.type}
                  redirect={this.props.redirect}
                />
              </div>
            </PostContentsStyled>
          </SectionStyled>
        </Fade>
      </Swipeable>
    );
  }
}

export default withRouter(Tattoo);
