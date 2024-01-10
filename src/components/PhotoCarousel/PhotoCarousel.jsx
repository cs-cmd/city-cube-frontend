import './PhotoCarousel.css';
import { useState, useEffect } from 'react';
// placeholder for photos to retrieve during load
const factoryImages = [
  '../src/assets/images/factory-images/factory1.jpg',
  '../src/assets/images/factory-images/factory2.jpg',
  '../src/assets/images/factory-images/factory3.jpg',
  '../src/assets/images/factory-images/factory4.jpg',
]

export default function PhotoCarousel({photoNames = null}) {
  const [ carouselImageLinks, setCarouselImageLinks ] = useState([]);


  // get image links from local or remote source
  useEffect(() => {
    // user did not defin
    if(photoNames === undefined ||
        photoNames === null) {
          setCarouselImageLinks(factoryImages);
    }
    else {
      // fetch new carousel images from whatever source
    }
    setCarouselImageLinks(factoryImages);
    return () => {

    }
  }, [photoNames]);


  return (
    <div className='photo-carousel'>
      {carouselImageLinks.map((item, index) => <img key={index} src={item} />)}
    </div>
  )
}