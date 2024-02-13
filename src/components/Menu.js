import React from 'react';
import '../css/menu.css';

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'}>
            <div className='blur'>
                <div className='menu__content'>
                    <p className='menu__header'>{header}</p>
                    <ul className='menu__header--list'>
                        {items.map (item => 
                            <li className='menu__header--item'>
                                <a className='menu__header--link' href={item.href}>{item.value}</a>
                            </li>
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;