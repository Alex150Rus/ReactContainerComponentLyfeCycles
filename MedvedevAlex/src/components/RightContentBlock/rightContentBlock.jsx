import './rightContentBlock.css';

import React, {Component} from 'react';

import Form from 'components/Form';

export default class RightContentBlock extends Component {
  render() {
    return (
      <div className="rightContentBlock">
        <Form />
      </div>
    )
  }
}