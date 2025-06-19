import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const oldPage = () => {
    return (
        <div>
              <div className="home" id="home">
        <div className="container">
          <div style={{ display:"flex", flexDirection:"row", height:"100vh", alignItems:"center"}}>
            <div className="content" style={{textAlign:"left"}}>
              <h4>Allow us to <br/> make your smile brighter.</h4>
              <p>
                DentalClinic Can Help You Get the Smile You've Always Wanted. We
                offer cosmetic dentistry, root canal therapy, cavity
                inspections, and more.
              </p>
              <Link to="/appointmentBooking" >
                <Button className="link-btn">make appointment </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
        </div>
    );
};

export default oldPage;