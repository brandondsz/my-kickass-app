import React, { Component } from 'react';
import {TopCategoryBox} from './TopCategoryBox';

export class TopCategorySection extends Component {
  render() {
    return (
        <section className="home-cat-sec text-center">
            <div className="container">
                <h2 className="site-title">Browse by top categories</h2>
                <div className="row">         
                    <TopCategoryBox name="Concerts" imageSource="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg"/>        
                    <TopCategoryBox name="Cricket" imageSource="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg"/>        
                    <TopCategoryBox name="Theatre & Arts" imageSource="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg"/>   
                    <TopCategoryBox name="Amusement Parks" imageSource="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg"/>   
                    <TopCategoryBox name="Sports" imageSource="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg"/>   
                    <TopCategoryBox name="Restaurants" imageSource="https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg"/>

                </div>
            </div>
        </section>
    );
  }
}

export default TopCategorySection;
