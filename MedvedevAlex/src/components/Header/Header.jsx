import './Header.css';

import React, {Component} from 'react';

import Menu from 'components/Menu'
import Brand from 'components/Brand'

const items = [
  {title: 'Домашняя' ,href: '#'},
  {title: 'Личный кабинет' ,href: '#'},
  {title: 'Комментарии' ,href: '#'},
  {title: 'Рейтинг блогеров' ,href: '#'},
];

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <Brand />
          <Menu items={items} />
        </div>
      </header>
    )
  }
}