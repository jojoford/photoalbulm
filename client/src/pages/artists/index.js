//alyse add
import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import katieprofile from "../../assets/katieprofile.jpg";
import JamesProfile from "../../assets/JamesProfile.jpg";
import kimArtist2 from "../../assets/kimArtist2.jpg";
import PageTitle from "../../components/Title";
import "./artists.css";


function Artists() {
  return (
    <div className="about-wrapper">
      <PageTitle title="Artists" />
      <div className="about-grid">

        <div className="about-container" style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <p>
                About the photographers
           </p>
              <p>
                Welcome to a unique opportunity to get a great job done and support your neighbors in their passion
           </p>
              <p>
                Contact the photographers below about prints, classes and portraits in your area
           </p>
              <p>Join us as we spread light through creativity .</p>
            </Col>
          </Row>
        </div>

        {/* here is the artists data */}

        <div className="members-container">

          <div className="row">

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img  alt="katiejane" src={katieprofile} />
                </div>
                <div className="team-content">
                  <h3 className="name">KatieJane</h3>
                  <h4 className="title">photographer 10+ years</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/company/katie-jane-photography/about/" target="_blank"> </a></li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto: her@gmail" target="_blank" > </a></li>
                </ul>
              </div>
            </div>



            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img alt="James" src={JamesProfile} />
                </div>
                <div className="team-content">
                  <h3 className="name">James </h3>
                  <h4 className="title"> Photographer 10+ years</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/in/james-strength-96595259/" target="_blank"> </a></li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto:him@gmail.com" target="_blank"> </a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img  alt="Kim" src={kimArtist2}/>
                </div>
                <div className="team-content">
                  <h3 className="name">Kim</h3>
                  <h4 className="title">Artist for years</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/in/kimberley-jay-b4a21517/" target="_blank"> </a> </li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="mailto:Kim@gmail.com" target="_blank"> </a></li>
                </ul>
              </div>
            </div>

           
          </div>
        </div>

      </div>
    </div>

  );
}
export default Artists;