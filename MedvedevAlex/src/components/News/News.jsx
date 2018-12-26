import './News.css';

import React, {Component} from 'react';


export default class News extends Component {
constructor(props) {
  super(props);
  this.state = this.getState();
}

getState() {
  const {news} = this.props;
  const object = {};
  for (let i = 0; i < news.length; i++) {
    object['text' + (i+1)] = false;
  }
  return object
}

showTextButton = (event)=> {
  const id = event.target.name;
  this.setState({[id] : !this.state[id]});
};

  render() {
    const {news} = this.props;
    return (
      <div className="News">
        {news.map((item, idx) => <div key={idx} className="newsBlock"><h3>{item.title}</h3>
          <img className="newsBlockImg" src={require(`./${item.picFilename}`)} alt=""/><p>{item.smallText}</p>
          <button className='showMoreBtn' name={'text' + (idx+1)} onClick={this.showTextButton}>читать далее</button>
          <p>{this.state['text' + (idx+1)] && item.largeText}</p></div>)}
      </div>
    )
  }
}