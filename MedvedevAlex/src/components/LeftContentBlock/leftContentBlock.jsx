import './leftContentBlock.css';

import React, {Component} from 'react';

import News from 'components/News';
import NewsJson from 'components/LeftContentBlock/news.json'

export default class LeftContentBlock extends Component {
    render() {
    const news = NewsJson;
    return (
      <div className="leftContentBlock">
          <News news = {news} />
      </div>
    )
  }
}