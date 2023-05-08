import React,{ useState }from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';



//Components




export default function HeroCarousel() {
  
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        }; 

  return (
  


<Carousel id="template-mo-jassa-hero-carousel" interval={1000} variant='dark'  activeIndex={index} onSelect={handleSelect}>
<Carousel.Item >
  <img
    className="d-block mx-auto"
    src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg"
    alt="First slide"
  />
  <Carousel.Caption className='caption'>
  <h1 className="h1 text-success"><b>Jassa</b> eCommerce</h1>
    <h2 className='h2'>First slide label</h2>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block mx-auto"
    src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_02.jpg"
    alt="Second slide"
  />

  <Carousel.Caption className='caption'>
  <h1 className="h1">Lorem Ipsum</h1>

  <h2 className='h2'>Second slide label</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block mx-auto"
    src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_03.jpg"
    alt="Third slide"
  />

  <Carousel.Caption className='caption'>
  <h1 className="h1">Lorem Ipsum</h1>

<h2 className='h2'>Third slide label</h2>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>





);

}