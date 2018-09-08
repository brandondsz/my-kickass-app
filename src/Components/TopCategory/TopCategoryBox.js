import React, { Component } from 'react';

export class TopCategoryBox extends Component {
  render() {
    return (
        <div className="col-sm-4 cat-box">
        <a href="#" className="block-link">
          <div className="cat-txt">
            <h3>{this.props.name}</h3>
          </div>
          <img src={this.props.imageSource} alt="" className="img-full-width"></img>
        </a>
      </div>
    );
  }
}

export default TopCategoryBox;
