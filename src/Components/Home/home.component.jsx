import React, { Component } from 'react';
import ActionButton from '../ActionButton/actionButton.component';
import ActionButton2 from '../ActionButton2/actionButton2.component';
import './home.styles.scss';

class Home extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    function init() {

      wait(1000).then(() => {
        clearText()
        typeText('My name is ').then(typeLoop)
      })

      function typeLoop() {
        typeText('Omoke')
          .then(() => wait(3000))
          .then(() => removeText('Omoke'))
          .then(() => typeText('Chuku'))
          .then(() => wait(3000))
          .then(() => removeText('Chuku'))
          .then(typeLoop)
      }

    }

    const elementNode = document.getElementById('type-text')
    let text = ''

    const updateNode = () => {
      elementNode.innerText = text
    }

    const pushCharacter = (character) => {
      text += character
      updateNode()
    }

    const popCharacter = () => {
      text = text.slice(0, text.length - 1)
      updateNode()
    }

    const clearText = () => {
      text = ''
      updateNode()
    }


    const wait = (time) => {
      if (time === undefined) {
        const randomMsInterval = 100 * Math.random()
        time = randomMsInterval < 50 ? 10 : randomMsInterval
      }

      return new Promise(resolve => {
        setTimeout(() => {
          requestAnimationFrame(resolve)
        }, time)
      })
    }

    const typeCharacter = (character) => {
      return new Promise(resolve => {
        pushCharacter(character)
        wait().then(resolve)
      })
    }

    const removeCharacter = () => {
      return new Promise(resolve => {
        popCharacter()
        wait().then(resolve)
      })
    }

    const typeText = (text) => {
      return new Promise(resolve => {

        function type([character, ...text]) {
          typeCharacter(character)
            .then(() => {
              if (text.length) type(text)
              else resolve()
            })
        }

        type(text)
      })
    }

    const removeText = ({ length: amount }) => {
      return new Promise(resolve => {

        const remove = (count) => {
          removeCharacter()
            .then(() => {
              if (count > 1) remove(count - 1)
              else resolve()
            })
        }

        remove(amount)
      })
    }


    init()

  }

  render() {
    return (
      <div className='home'>
        <div className=' row rrow'>
          <div className='col-sm-12 column'>
            <div className='left-text'>
              <p className='main-text'>
                Hi. <br />
                <span id="type-text">...</span>
                <span className='blinking-cursor'>_</span></p>

              <div className='sub-text'>I am a Software Developer</div>
              <div className='action-buttons'>
                <div className='learn-more'>
                  <ActionButton>Learn more</ActionButton>
                </div>
                <div className='hire-gig'>
                  <ActionButton2>Hire me for gigs</ActionButton2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='row'>
          <div className='col-md-12 text-center'>
            <p className='follow-text text-center'>Follow me</p>
            <div className='sm-list'>
              <Twitter className='icons' />
              <Linkedin className='icons' />
              <Instagram className='icons' />
              <Youtube className='icons' />
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Home;
