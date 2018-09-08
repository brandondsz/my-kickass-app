import React, { Component } from 'react';

export class CarouselItem extends Component {
  render() {
    return (
        <div data-slide={this.props.sequence} className="item" className={this.props.active}>
        <img src={this.props.poster} alt="" className="hide-on-desktop"/>
        <div className="hide-on-mobile">
          <video title={this.props.sequence}  autoPlay loop muted poster={this.props.poster}>
          <source src={this.props.video} type="video/mp4"/>Your browser does not support the video tag.</video>
        </div>
      </div>
    );
  }
}

