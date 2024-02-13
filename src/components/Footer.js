import React from 'react';

import '../css/footer.css';
import '../css/normalize.css';
import '../css/reset.css';

import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <ul className='footer__menu'>
                    <li className='footer__menu--column'>
                        <a href="#" className='footer__menu--link'>ЧАСТЫЕ ВОПРОСЫ</a>
                        <a href="#" className='footer__menu--link'>СЛУЖБА ПОДДЕРЖКИ</a>
                        <a href="#" className='footer__menu--link'>КОНТАКТЫ</a>
                    </li>
                    <li className='footer__menu--column'>
                        <a href="#" className='footer__menu--link'>ГЛАВНАЯ СТРАНИЦА</a>
                        <a href="#" className='footer__menu--link'>НАЙТИ РЕПЕТИТОРА</a>
                        <a href="#" className='footer__menu--link'>НАЙТИ УЧЕНИКА</a>
                    </li>
                    <li className='footer__menu--column'>
                            <Link to="Profile" className='footer__menu--link'>ЛИЧНЫЙ КАБИНЕТ</Link>
                        <a href="#" className='footer__menu--link'>ОТЗЫВЫ</a>
                    </li>
                    <li className='footer__menu--column'>
                        <a className='footer__logo' href="index.html">
                            <img className='footer__logo--icon' src={require('../icons/logo.png')} />
                            <p className='footer__logo--title'>Навигатор обучения</p>
                        </a>
                        <a href="#" className='footer__rules'>© keeq0.ru / Правила сервиса</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
;}

export default Footer;