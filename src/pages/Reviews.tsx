import React from "react";

const Reviews = () => {
  return (
    <div>
      <section className="reviews" id="reviews">
        <h1 className="heading"> Our Clients </h1>

        <div className="box-container container">
          <div className="box">
            <img src="images/pic-1.png" alt="" />
            <p>
              {" "}
              I couldn’t believe that it was so afordable compared to the
              alternatives available in the market.
            </p>
            <div className="stars">
              <i className="fas fa-star" style={{ color: 'yellow' }}></i>
              <i className="fas fa-star" style={{ color: 'yellow' }}></i>
              <i className="fas fa-star" style={{ color: 'yellow' }}></i>
              <i className="fas fa-star" style={{ color: 'yellow' }}></i>
              <i className="fas fa-star-half-alt" style={{ color: 'yellow' }}></i>
            </div>
            <h3>Alan Harris</h3>
            <span>Manager</span>
          </div>

          <div className="box">
            <img src="images/pic-2.png" alt="" />
            <p>
              Earlier I used to hide my smile and now I can’t stop smiling.
              Flexalign aligners changed my life &amp; smile completely.
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>Sophie Johnson</h3>
            <span>Assistant Manager</span>
          </div>

          <div className="box">
            <img src="images/pic-3.png" alt="" />
            <p>
              Great experience with DentalClinic aligners. I would recommend
              this place for they have the best quality service
            </p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <h3>James Williams</h3>
            <span>CEO</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
