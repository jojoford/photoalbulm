import React from 'react';
import PageTitle from "../Title";
import "./about.css";
import Row from "../Row";
import Col from "../Col";
import profilepic from '../../assets/profilepic.jpg';
import aaliyah from '../../assets/aaliyah.jpg';

// about component
function About() {
  return (
    <div className="about-wrapper">
      <PageTitle title="About Us" />

      <div className="about-grid">

        <div className="about-container" style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
      <h1 id="about"> We are...</h1>
      <p>Long time supporters of the Nashville art community we want to connect you with talented locals.
        <br></br>
        Do you have an event comming up that you need presented well and preserved to be cherished for all time? Do have an interest in photography and would like to learn from someone nearby?
        Then you are in the right place. Our local photographers can help you!
        </p>
            </Col>
          </Row>
        </div>
</div> 
<div className="col-12 col-sm-6 col-md-4 col-lg-3">
  <h1> Our Team</h1>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img  alt="Aaliyah" src={aaliyah}/>
                </div>
                <div className="team-content">
                  <h3 className="name">Aaliyah Symlar</h3>
                  <h4 className="title">Symlara</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/in/aaliyah-symlar-931213102/" target="_blank"> </a> </li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://github.com/symlara" target="_blank"> </a></li>
                </ul>
              </div>
            </div>
            <div className="our-team">
                <div className="picture">
                  <img alt="Jojoford" src={profilepic} />
                </div>
                <div className="team-content">
                  
                  <h3 className="name">Alyse Alford </h3>
                  <h4 className="title"> JojoFord</h4>
                </div>
                <ul className="social">
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyse-alford-5120761b4/" target="_blank"> </a></li>
                  <li><a className="social-link fab fa-github" rel="noopener noreferrer" href="https://github.com/jojoford" target="_blank"> </a></li>
                </ul>
              </div>
            </div>

            
</div>
        
           
            );
            }

export default About;
