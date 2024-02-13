import React from 'react';

import './interaction.css';

const Interaction = () => {
    return (
        <>
        <section className='interaction'>
            <div className='interaction__container'>
                <div className='interaction__container--left'>
                    <div className='interaction__balance'>
                        <p className='interaction__balance--info'>БАЛАНС: <span className='orange'>30 000 ₽</span></p>
                        <a href="deposit" className='interaction__deposit'>ПОПОЛНИТЬ</a>
                        <a href="withdraw" className='interaction__withdraw'>ВЫВЕСТИ</a>
                        <a href="history" className='interaction__link orange'>ИСТОРИЯ ПЛАТЕЖЕЙ</a>
                        <a href="support" className='interaction__link black'>ОБРАТИТЬСЯ В ПОДДЕРЖКУ</a>
                    </div>
                    <div className='interaction__buttons'>
                        <a href="#" className='interaction__buttons--btn'>СОЗДАТЬ<span className='orange'>ЗАНЯТИЕ</span></a>
                        <a href="#" className='interaction__buttons--btn'>СОЗДАТЬ<span className='orange'>ЗАЯВКУ</span></a>
                    </div>
                </div>
                <div className='interaction__container--right'>
                    <div className='interaction__container--title'>
                        <h3 className='interaction__title'>МОНИТОРИНГ ЗАНЯТИЙ</h3>
                        <div className='interaction__role'>
                            <button className='role__tutor'>
                                Я РЕПЕТИТОР
                            </button>
                            <button className='role__student'>
                                Я УЧЕНИК
                            </button>
                        </div>
                    </div>
                    <ul className='interaction__tasks'>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                        <li className='interaction__tasks--item'>
                            <p className='task__category'>Иностранные языки</p>
                            <p className='task__title'>Репетитор по английскому языку</p>
                            <p className='task__cost'>7 000 ₽</p>
                            <p className='task__date'>13.02.2024 - 20.02.2024</p>
                            <div className='task__user'>
                                <img className="task__photo" src={require('../../images/user.jpg')} />
                                <p className='task__username'><span className='orange'>СЕРГЕЙ</span> МЯКОТНЫХ</p>
                            </div>
                            <button className='task__button'>Завершить</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Interaction;