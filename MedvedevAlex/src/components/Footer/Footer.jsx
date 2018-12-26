import './Footer.css';

import React, {Component} from 'react';
import Menu from "components/Menu";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
          Copyright Alexander Medvedev
        </div>
      </div>
    )
  }
}