import { useNavigate } from "react-router-dom";
import React from "react";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-md-push-5">
              <div className="booking-cta">
                <h1>Book Your Tickets Now</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  facere, soluta magnam consectetur molestias itaque ad sint
                  fugit architecto incidunt iste culpa perspiciatis possimus
                  voluptates aliquid consequuntur cumque quasi. Perspiciatis.
                </p>
                <button type="button" className="btn btn-warning">
                  Help
                </button>
                <button type="button" className="btn btn-warning">
                  Logout
                </button>
              </div>
            </div>
            <div className="col-md-4 col-md-pull-7">
              <div className="booking-form">
                <form>
                  <div className="form-group">
                    <span className="form-label">Your Source</span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Source City Name"
                    />
                  </div>

                  <div className="form-group">
                    <span className="form-label">Your Desitination</span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Destination City Name"
                    />
                  </div>

                  <div className="form-group">
                    <span className="form-label">Date</span>
                    <input
                      className="form-control"
                      type="date"
                      placeholder="Enter Date"
                      min="2013-07-14"
                    />
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn">
                      Show Buses
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
