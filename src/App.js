import React, { Component } from 'react';
import './App.css';
import {HotTicketsSection} from './Components/HotTicket/HotTicketsSection';
import {TopCategorySection} from './Components/TopCategory/TopCategorySection';
import {SellersSection} from './Components/Sellers/SellersSection';
import {FeaturedSection} from './Components/Featured/FeaturedSection';
import {Carousel} from './Components/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div>   
        <Carousel/>   
        <HotTicketsSection/>
        <TopCategorySection/>
        <SellersSection/>
        <FeaturedSection/>
      </div>

    );
  }
}

export default App;
