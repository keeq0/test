import React from 'react';
import {useState} from 'react';

import '../css/header.css';
import '../css/normalize.css';
import '../css/reset.css';

import {Link} from 'react-router-dom';

import Menu from "./Menu.js";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value:"ГЛАВНАЯ",href:"index.html"},{value:"НАЙТИ РЕПЕТИТОРА",href:"findtutor.html"},{value:"НАЙТИ УЧЕНИКА",href:"findstudent.html"},{value:"ОТЗЫВЫ",href:"reviews.html"},{value:"РЕГИСТРАЦИЯ",href:"registration.html"},{value:"ВХОД",href:"findtutor.html"}]
  return (
    <header className='header'>
      <div className='header__container'>
        <ul className='header__menu'>
          <li className='header__menu--item logo'>
            <Link className='link logo' to="/">
              <img className='logo__icon' alt="abc" src={require=('../icons/logo.png')} />
              <p className='logo__title'>Навигатор обучения</p>
            </Link>
          </li>
          <li className='header__menu--item links'>
            <Link href="findtutor" className='link find-tutor'>НАЙТИ <span className='orange'>РЕПЕТИТОРА</span><div className="link__underline"></div></Link>
            <Link href="findstudent" className='link find-student'>НАЙТИ <span className='orange'>УЧЕНИКА</span><div className="link__underline"></div></Link>
            
          </li>
          <li className='header__menu--item buttons'>
            <Link href="registration.html" className='link button--registration'>
              РЕГИСТРАЦИЯ
            </Link>
            <Link href="login.html" className='link button--login'>
              ВХОД
            </Link>
          </li>
          <li className='burger-menu' onClick={() => setMenuActive(!menuActive)}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </li>
          <Menu active={menuActive} setActive={setMenuActive} header={"Меню"} items={items}/>
        </ul>
      </div>
    </header>
  );
};

export default Header;
