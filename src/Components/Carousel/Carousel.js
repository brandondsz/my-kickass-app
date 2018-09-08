import React, { Component } from 'react';
import {CarouselItem} from './CarouselItem';

export class Carousel extends Component {
  render() {
    return (
        // <!--START SLIDER-->
        // <!-- Slider begins here -->
        <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
          <h1>Tickets made simple for everyone, everywhere</h1>
          <div className="site-manu container">
            <div className="collapse navbar-collapse hide-on-mobile">
              <ul className="nav navbar-nav sub-main-nav">
                <li><a href="#">Concerts</a></li>
                <li><a href="#" className="blue-bg">Cricket</a></li>
                <li><a href="#" className="orange-bg">Events</a></li>
                <li><a href="#" className="green-bg">Sports</a></li>
                <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
                <li><a href="#" className="purple-bg">Restaurants</a></li>
                <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
                <li><a href="#">Parties</a></li>
              </ul>
            </div>
            <div className="banner-serch-box"><input id="txtSearchBox"  name="q" placeholder="Search for an event, venue or city" type="text"/><a href="javascript:void(0);"><i className="fa fa-search" aria-hidden="true"></i></a>
            </div>
          </div>
          {/* <!-- Carousel items --> */}
          <div className="carousel-inner">
            {/* <!-- slide #1 --> */}
            <CarouselItem active="active" sequence="0" poster="http://content.kyazoonga.com/Footer/slider-1.jpg" video="http://content.kyazoonga.com/videos/video9.mp4"></CarouselItem>
            <CarouselItem  sequence="1" poster="http://content.kyazoonga.com/Footer/slider-1.jpg" video="http://content.kyazoonga.com/videos/video1.mp4"></CarouselItem>
            <CarouselItem sequence="2" poster="http://content.kyazoonga.com/Footer/slider-1.jpg" video="http://content.kyazoonga.com/videos/video2.mp4"></CarouselItem>
            <CarouselItem sequence="3" poster="http://content.kyazoonga.com/Footer/slider-1.jpg" video="http://content.kyazoonga.com/videos/video3.mp4"></CarouselItem>
            <CarouselItem sequence="4" poster="http://content.kyazoonga.com/Footer/slider-1.jpg" video="http://content.kyazoonga.com/videos/video8.mp4"></CarouselItem>
          </div>
          {/* <!-- end of '.carousel-inner' --> */}
      
        </div>
        // <!-- end of '#homepage_slider' -->
        // <!-- Slider ends here -->
        // <!--END SLIDER-->
    );
  }
}

