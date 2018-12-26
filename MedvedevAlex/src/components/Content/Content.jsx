import './Content.css';

import React, {Component} from 'react';

import LeftContentBlock from 'components/LeftContentBlock'
import RightContentBlock from 'components/RightContentBlock'


export default class Content extends Component {
  render() {
    return (
      <div className="Content">
        <LeftContentBlock />
        <RightContentBlock />
      </div>
    )
  }
}