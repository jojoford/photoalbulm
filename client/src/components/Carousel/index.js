import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import KimsBlackandWhite from "../../assets/all/KimsBlackandWhite.jpg";


class carousel extends Component {
  render() {
    let carousel = {
      position: "relative",
      //height: 600,
      //width: "100%",
    };
    
    return (
      <div className="has-margins margin-top carousel">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        style={carousel}
        showStatus={false}
      >
       <div>
         <img src="https://images.squarespace-cdn.com/content/v1/52561b19e4b087f3368839ba/1401891725887-QLUF9C1DXI6UZUF68FI3/ke17ZwdGBToddI8pDm48kGXoD000J7kx3NE7W-LXpdwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcSHIBb6yNmvYkAyvF3loIw6LWPhmq3jJqr-f9nvyP7bW--NA7--1aw0mnW_uWXk87/Honeymoon_10.jpg?format=1000w"
                   alt= "a rose"></img> 
                   <p className="legend">Image 2 by KatieJane</p>
                </div>
                <div>
                    <img src="https://images.squarespace-cdn.com/content/v1/52561b19e4b087f3368839ba/1381376765853-N1DUIQT7BZIY0KSSUC86/ke17ZwdGBToddI8pDm48kKSHvVWv0pZ6Pi6-QUeVAdxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI91GJvUdWV1nbScQZTDGhtl9gP8YdCzEmY9N9JZjd2IMKMshLAGzx4R3EDFOm1kBS/downtown+copy.jpg?format=1000w" alt="Nashville black and white" />
                    <p className="legend">Image 2 by KatieJane</p>
                </div>
                <div>
                  <img src="https://images.squarespace-cdn.com/content/v1/52561b19e4b087f3368839ba/1474980808178-P12HXXTLND5XIT6JKVKK/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/MistyKevinMaternity_26.jpg?format=2500w" alt= "couple expecting"></img>
                   <p className="legend">Image 3 </p>
                </div>
                <div>
                    <img src={KimsBlackandWhite} alt="a couple" />
                    <p className="legend">Image 4 by Kim</p>
                </div>
                <div>
                    <img src="https://images.squarespace-cdn.com/content/v1/52561b19e4b087f3368839ba/1486522670940-D5EL7JR8BM4XQNX7DYON/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/LonguskiFamily_14.jpg?format=2500w" alt="a couple holding their baby"/>
                    <p className="legend">Image 5</p>
                </div>
      </Carousel>
      </div>
    );
  }
}

export default carousel;

/* make this a carousel/ slideshow of images
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from "./slide";

class carousel extends Component {
  render() {
    let carousel = {
      position: "relative"
    };

    return (
      <div className="has-margins margin-top">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        style={carousel}
        showStatus={false}
      >
        <Slide
          image={this.props.img1}
          title={this.props.title1}
          description={this.props.description1}
        />
        <Slide
          image={this.props.img2}
          title={this.props.title2}
          description={this.props.description2}
        />
        <Slide
          image={this.props.img3}
          title={this.props.title3}
          description={this.props.description3}
        />
      </Carousel>
      </div>
    );
  }
}

export default carousel;*/