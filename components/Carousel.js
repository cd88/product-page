import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types';
import cx from 'classnames'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import TouchCarousel, {clamp} from 'react-touch-carousel'
// export {
//   clamp: somethingTheyalreadyCreated
// }
// export default TouchCarousel
// export touchWithMouseHOC


const carouselSlideData = [
  {
    title: 'Step 1',
    text: "Insert the Mulchmate diagonally downward into a Lawn Bag",
    imageUrl: "static/images/mulchmate-demo-slide-1.png"
  },
  {
    title: 'Step 2',
    text: "Lift and guide the Mulchmate corners until snug against the bag corners",
    imageUrl: "static/images/mulchmate-demo-slide-2.png"
  },
  {
    title: 'Step 3',
    text: "Ready to use! The bag will stand & remain open while you fill it",
    imageUrl: "static/images/mulchmate-demo-slide-3.png"
  }
]

const query = ""
const enableLoop = 0
const enableAutoplay = 0

const cardSize = 400
const cardPadCount = enableLoop ? 3 : 0

function log (text) {
  console.log(text)
}

function CarouselContainer (props) {
  const carouselWidth = process.browser ? clamp(window.innerWidth, 0, 960) : 400;
  const {cursor, carouselState: {active, dragging}, ...rest} = props
  let current = -Math.round(cursor) % carouselSlideData.length
  while (current < 0) {
    current += carouselSlideData.length
  }
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (

    <NonPassiveTouchTarget
      className={cx(
        'carousel-container',
        {
          'is-active': active,
          'is-dragging': dragging
        }
      )}
    >
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{transform: `translate3d(${translateX}px, 0, 0)`}}
        {...rest}
      />
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

class Carousel extends React.Component {
  renderCard (index, modIndex) {
    const item = carouselSlideData[modIndex]
    return (
      <div
        key={index}
        className='carousel-card'
        onClick={() => log(`clicked card ${1 + modIndex}`)}
      >
        <div className='carousel-card-inner'>
          <div className='carousel-title'>{item.title}</div>
          <div className='carousel-text'>{item.text}</div>
          <img draggable="false" src={process.env.BACKEND_URL + item.imageUrl}/>
        </div>
      </div>
    )
  }
  handlePaginationClick(index) {
    this.props.updateCurrentSlide(index)
    this.touchCarousel.go(0-index)
    console.log(index)
  }
  render () {
    return (
      <TouchCarousel
        component={Container}
        cardSize={cardSize}
        cardCount={carouselSlideData.length}
        cardPadCount={cardPadCount}
        loop={enableLoop}
        autoplay={enableAutoplay ? 2e3 : false}
        renderCard={this.renderCard}
        onRest={index => {this.props.updateCurrentSlide(index)}}
        onDragStart={() => log('dragStart')}
        onDragEnd={() => log('dragEnd')}
        onDragCancel={() => log('dragCancel')}
        ref={instance => { this.touchCarousel = instance }}
      />
    )
  }
}

Carousel.propTypes = {
  updateCurrentSlide: PropTypes.func
}

export default Carousel
