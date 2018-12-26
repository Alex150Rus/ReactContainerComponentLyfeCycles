import './Form.css';

import React, {Component} from 'react';


export default class Form extends Component {

  checkName(){
    const name = document.getElementById('login').value;
    if (/^[a-zа-яё0-9]{1,20}$/i.test(name)){
      document.getElementById('errorName').innerHTML = '';
    } else if (name === '') {
      const errorNameEl = document.getElementById('errorName');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Заполните поле ввода имени";
    } else {
      const errorNameEl = document.getElementById('errorName');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Для ввода имени допустимы только буквы и цифры";
    }
  }

  checkPassword(){
    const password = document.getElementById('password').value;
    if (/^[a-zа-яё0-9]{1,20}$/i.test(password)){
      document.getElementById('errorPassword').innerHTML = '';
    } else if (password === '') {
      const errorNameEl = document.getElementById('errorPassword');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Заполните поле ввода пароля";
    } else {
      const errorNameEl = document.getElementById('errorPassword');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Для ввода пароля допустимы только буквы и цифры";
    }
  }

  render() {
    return (
      <div className="Form">
        <form>
          <label htmlFor="login">логин: <input onInput={this.checkName} className="loginInput" id="login" type="text" placeholder="введите логин: макс20симв" maxLength="20"/></label>
          <div id="errorName"></div>
          <label  htmlFor="password">пароль: <input onInput={this.checkPassword} className="loginPassword" id="password" type="password" placeholder="введите пароль: макс20симв" maxLength="20"/></label>
          <div id="errorPassword"></div>
          <div className="ButtonWrapper">
            <button className="enterBtn">Войти</button>
            <button className="regBtn">Регистрация</button>
          </div>
        </form>
      </div>
    )
  }
}