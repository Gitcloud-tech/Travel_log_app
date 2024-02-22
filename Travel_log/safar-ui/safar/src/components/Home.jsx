import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../projectImages/Carousel/pexels-asad-photo-maldives-1450340.jpg';
import img2 from '../projectImages/Carousel/pexels-jacob-colvin-1761282.jpg';
import img3 from '../projectImages/Carousel/pexels-pixabay-99551.jpg';
import img4 from '../projectImages/Carousel/pexels-syed-hasan-mehdi-815880.jpg';
import Reviews from './Reviews';
import '../Styles/Home.css';
import { Button } from 'react-bootstrap';
import FeaturedPlaces from './FeaturedPlaces';
import Newsletter from './Newsletter';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Carousel fade controls={false}>
                <Carousel.Item>
                    <img src={img1} alt="First slide" className="carousel-image" />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Discover Enchanting Travel Destinations</h3>
                        <p>Immerse yourself in a world of travel wonders and discover unique destinations.</p>
                        <p><Button type='button' variant="outline-light" onClick={() => navigate('/all-blogs')} >EXPLORE JOURNEYS</Button></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img2} alt="Second slide" className="carousel-image" />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Dive into Modern Adventures</h3>
                        <p>Experience a contemporary collection that pushes the boundaries of travel innovation.</p>
                        <p><Button type='button' variant="outline-light" onClick={() => navigate('/all-blogs')} >VIEW COLLECTIONS</Button></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img3} alt="Third slide" className="carousel-image" />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Elevate Your Journey with Timeless Explorations</h3>
                        <p>Transform your adventures with a grand collection of timeless destinations.</p>
                        <p><Button type='button' variant="outline-light" onClick={() => navigate('/all-blogs')}>EXPLORE JOURNEYS</Button></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img4} alt="Fourth slide" className="carousel-image" />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Discover Journeys That Resonate</h3>
                        <p>Let your adventure through the destinations be guided by experiences that resonate with your soul.</p>
                        <p><Button type='button' variant="outline-light" onClick={() => navigate('/all-blogs')}>EXPLORE JOURNEYS</Button></p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
       
            <div className="featured-places">
            <FeaturedPlaces />
            </div>

            <div className="just-info">
            <Newsletter />
            </div>

            <div>
                <Reviews />
            </div>
        </>
    );
}
