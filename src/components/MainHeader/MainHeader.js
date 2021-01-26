import React from "react";
import "./MainHeader.css"


function MainHeader() {
    return (
        <header className="content__container">
            <div className="content__wrapper">
                <div className="content__wrapper-item">
                    <a className="content__logo" href="https://yandex.ru/">SkillDrive</a>
                </div>
                <div className="content__wrapper-item is-desktop">
                    <nav className="menu__frame">
                        <a href="/" className="menu__frame-link is-animated" data-target="about">О нас</a>
                        <a href="/" className="menu__frame-link is-animated" data-target="contact">Условия</a>
                        <a href="/faqpage" className="menu__frame-link is-animated" data-target="team">Частые вопросы</a>
                    </nav>
                </div>
                <div className="content__wrapper-item is-desktop">
                    <button className="content-button is-animated"><span className="content-button-text">Войти</span></button>
                </div>
            </div>
        </header>
    )
}

export default MainHeader