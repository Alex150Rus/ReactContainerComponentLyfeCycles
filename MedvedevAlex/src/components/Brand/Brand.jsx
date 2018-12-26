import './Brand.css';

import React, {Component} from 'react';

export default class Brand extends Component {
  render() {
    return (
      <div className="Brand">
        <div><a href="index.html"><img className="brandImage" src={require('./cheatCat.png')} alt="cheatCat"/></a></div><div ><a className="brandName" href="index.html">CheatCat</a></div>
      </div>
    )
  }
}