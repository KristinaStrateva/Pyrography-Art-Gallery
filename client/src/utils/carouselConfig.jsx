import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = React.forwardRef((props, ref) => {
  return <Carousel ref={ref} {...props} />;
});

export default MyCarousel;