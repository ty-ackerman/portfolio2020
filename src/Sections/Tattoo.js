import React, { Component } from 'react'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'
import { PostContent, PostSubtitle } from '../Components/PostContent'
import fire from '../Components/fire'
import Fade from '../Components/Fade'
import TattooContent from '../Components/TattooContent'
import { useSwipeable, Swipeable } from 'react-swipeable'
import { withRouter } from 'react-router-dom'

const description =
  'The hardest part about getting a tattoo is choosing a permanent design. My unique solution - a QR code that scans to the content of my choosing by linking it to my personal website. To put it more simply, I can change what the code displays with the tap of a button.'

const subtitle = 'So What Does It Scan To?'

export class Tattoo extends Component {
  constructor () {
    super()
    this.state = {
      content: '',
      type: '',
      fullScreen: true
    }
  }

  async componentDidMount () {
    window.scrollTo(0, 0)
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ fullScreen: true })
    } else {
      this.setState({ fullScreen: false })
    }
    await this.getData()
  }

  getData = async () => {
    const dbRef = await fire.database().ref('/')
    dbRef.on('value', async snapshot => {
      const data = await snapshot.val()
      this.setState({ ...data })
    })
  }

  handleSwipe = () => {
    this.props.history.push('/tattoo/add')
  }

  handleClick = () => {
    this.state.fullScreen && this.setState({ fullScreen: false })
  }

  render () {
    const { fullScreen } = this.state

    if (fullScreen) {
      return (
        <Swipeable onSwipedLeft={eventData => this.handleSwipe()}>
          <Fade show>
            <div className='section' onClick={this.handleClick}>
              <div className='post-contents'>
                <TattooContent
                  content={this.state.content}
                  type={this.state.type}
                  redirect={this.props.redirect}
                />
              </div>
            </div>
          </Fade>
        </Swipeable>
      )
    }
    return (
      <Swipeable onSwipedLeft={eventData => this.handleSwipe()}>
        <Fade show>
          <div className='section' onClick={this.handleClick}>
            <div className='post-contents'>
              <Title
                title='My QR Code Tattoo'
                subtitle='My ridiculous permanent decision.'
              />
              <PostContent content={description} />
              <PostSubtitle content={subtitle} />
              <TattooContent
                content={this.state.content}
                type={this.state.type}
                redirect={this.props.redirect}
              />
              <div>
                To learn more about the tattoo,{' '}
                <Link to='/writing/post?id=tattoo'>click here</Link>.
              </div>
            </div>
          </div>
        </Fade>
      </Swipeable>
    )
  }
}

export default withRouter(Tattoo)
