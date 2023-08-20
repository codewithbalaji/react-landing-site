import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import banner1 from '../../images/banner.webp';
import banner2 from '../../images/banner-2.webp';
import banner3 from '../../images/banner-3.webp';
import { Link } from 'react-router-dom';
import '../../styles/HomeStyles.css';

const slideImages = [
  {
    img: banner1,
    caption: 'first Slide ',
  },
  {
    img: banner2,
    caption: 'Second Slide ',
  },
  {
    img: banner3,
    caption: 'Third Slide',
  },
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '90vh',
};

const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.img})` }}>
              <span>
                <div className="home">
                  <div className="headerContainer">
                    <h1>EXTRAORDINARY EXPERIENCES</h1>

                    <Link to="/menu">
                      <button>ORDER NOW</button>
                    </Link>
                  </div>
                </div>
              </span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ImageSlider;
