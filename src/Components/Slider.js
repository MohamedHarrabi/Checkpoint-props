import React from 'react';
import {Carousel}from 'react-bootstrap';
//
function Slider() {
    return (
        <div>
            <Carousel className='container'>
  <Carousel.Item interval={1000}>
    <img style={{width:1200,height:600, justifyContent:'center'}}
      className="d-block w-80"
      src="/victorhugo1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{width:1200, height:600, justifyContent:'center'}}
      className="d-block w-80"
      src="victorhugo2.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:1200, height:600,justifyContent:'center'}}
      className="d-block w-80"
      src="victorhugo3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slider
