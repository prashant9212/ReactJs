import React from 'react'
import BannerSlider1 from '../components/images/image1.jpg';
import BannerSlider2 from '../components/images/image2.jpg';
import BannerSlider3 from '../components/images/image3.jpg';

export default function HomeSlider() {
  return (
    <>  
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" data-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                   <img src={BannerSlider1} alt="Banner1" width="100%" />
                </div>
                <div className="carousel-item">
                     <img src={BannerSlider2} alt="Banner2" width="100%" />
                </div>
                <div className="carousel-item">
                     <img src={BannerSlider3} alt="Banner3" width="100%" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}
