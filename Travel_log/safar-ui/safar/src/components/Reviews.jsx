import React from 'react';
import Card from 'react-bootstrap/Card';

import './Reviews.css';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
  const reviewsData = [
    {
      review:
        "SAFAR is a hidden gem! I love the way it captures the essence of each journey, and the user-friendly interface is perfect for immersing oneself in the world of exploration.",
      name: 'WanderlustJess',
    },
    {
      review:
        "Navigating through destinations on this app is always a delight. The content curation is excellent, showcasing diverse experiences and hidden gems. It's a haven for travel enthusiasts.",
      name: 'AdventureSeekerBella',
    },
    {
      review:
        "The app's commitment to spotlighting offbeat locations is commendable. The diverse range of travel stories reflects the richness of global exploration.",
      name: 'LocalExplorerMike',
    },
    {
      review:
        "I've documented numerous trips using this app, and each time I'm impressed by the engaging narratives. The app's contribution to the travel community is invaluable.",
      name: 'NomadDreamerSarah',
    },
    { 
      review:
        "The app's support team is knowledgeable and passionate about travel. Their insights and willingness to share information enhance the overall experience for users.",
      name: 'DiscoverWithDave',
    },
    { 
      review:
        "As a travel blogger, I'm grateful for the opportunities this app provides. It's a platform that fosters storytelling and encourages explorers to share their unique perspectives.",
      name: 'WanderlustArtisan',
    },
    {
      review:
        "Surviving and thriving in every adventure is what this app is all about! I love how it encapsulates the raw beauty of each expedition, making exploration an exciting journey.",
      name: 'BearGryllsAdventures',
    },
    {
      review:
        "The app's commitment to creating an inclusive space for travel appreciation is commendable. It welcomes diverse perspectives and encourages a global dialogue.",
      name: 'CultureNomadSara',
    },
    {
      review:
        "I recently discovered this app, and I'm impressed by its dedication to showcasing authentic travel experiences. It's become my go-to place for discovering new destinations.",
      name: 'EpicJourneyVik',
    },
  ];

  return (
    <>
      <div className='section'>
        <h2><b>Reviews</b></h2>
      </div>
      <Card className="bg-dark text-white position-relative">
        <Card.Img
          src="Images/ManyImages/grassland003.jpg"
          alt="Card background"
          className='bkg'
          style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
        />
        <div className="overlay"></div>
        <Card.ImgOverlay
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Increase the alpha value for a darker overlay
        >
          <Carousel
            fade
            className="card-carousel"
            indicators={false}
            controls={false}
            interval={5000} // Adjust the interval time to 5000 milliseconds (5 seconds)
            pause={true} // Pause on hover
          >
            {reviewsData.map((review, index) => (
              <Carousel.Item key={index}>
                <div className="review-container"> {/* New container to style the reviews */}
                  <h4>{`"${review.review}"`}</h4>
                  <p>{`-- ${review.name} --`}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Reviews;
