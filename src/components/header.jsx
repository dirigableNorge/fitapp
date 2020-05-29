import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <div className="wrapper page-header__wrapper">
        <div className="page-header__top">
          <a href="#1" className="page-header__logo">
            <img className="page-header__logo-image" src="img/fitapp-logo.png" width="133" height="38" alt="Fitapp logo."></img>
          </a>
          <nav className="nav page-header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#1" className="nav__link">About</a>
              </li>
              <li className="nav__item">
                <a href="#1" className="nav__link">Features</a>
              </li>
              <li className="nav__item">
                <a href="#1" className="nav__link">Reviews</a>
              </li>
              <li className="nav__item">
                <a href="#1" className="nav__link">Blog</a>
              </li>
              <li className="nav__item">
                <a href="#1" className="nav__link">Support</a>
              </li>
              <li className="nav__item nav__item--accent">
                <a href="#1" className="nav__link">Get App</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="intro page-header__intro">
          <div className="intro__wrapper">
            <img src="img/app-icon.png" width="111" height="111" alt="Intro icon." className="intro__icon intro__icon--app"></img>
            <h2 className="intro__title">Helps you eat <b>better</b>.</h2>
            <p className="intro__text">FitApp is a free calorie counting and diet app PSD template which includes
              high quality 9 screens. This template can be very helpful if you're planning to build food tracking application. </p>
            <div className="intro__links">
              <a href="#1" className="intro__link">
                <img className="intro__icon" width="130" height="46" src="img/appstore-icon.png" alt="Appstore icon."></img>
              </a>
              <a href="#1" className="intro__link">
                <img className="intro__icon" width="137" height="46" src="img/google-play-icon.png" alt="Google Play icon."></img>
              </a>
            </div>
          </div>
          <img className="intro__image" width="404" height="753" src="img/intro-phone.png" alt="Phone with app."></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
