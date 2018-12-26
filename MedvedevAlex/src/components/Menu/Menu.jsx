import './Menu.css';

import React, {Component} from 'react';

export default class Menu extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className="Menu">
        <ul className="menuHeader">
          {items.map((item, idx) => <li className="menuList" key={idx}><a className="menuLink" href={item.href}>{item.title}</a></li> )}
        </ul>
      </div>
    )
  }
}