import React from 'react';

const Main = () => {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Fit app website</h1>
      <section className="features">
        <div className="wrapper features__wrapper">
          <img className="features__image" width="688" height="784" src="img/features.png" alt="Mobile phone."></img>
          <div className="features__container">
            <h2 className="page-main__title features__title">Best calorie <span className="page-main__title--green">counter app!</span></h2>
            <p className="features__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </section>
      <section className="plan">
        <div className="wrapper plan__wrapper">
          <h2 className="page-main__title plan__title">A simple way to <span className="page-main__title--green">plan your diet!</span></h2>
          <p className="plan__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <img className="plan__image" src="img/plan.png" width="795" height="545" alt="Mobile phones with app."></img>
        </div>
      </section>
      <section className="meal-time">
        <div className="wrapper meal-time__wrapper">
          <div className="meal-time__description">
            <h2 className="page-main__title meal-time__title">Manage your <span className="page-main__title--green">meal time</span></h2>
            <div className="meal-time__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque maxime sint, magnam officia sequi mollitia, est nam enim cumque officiis
              cupiditate impedit. Eius cupiditate doloribus quia nulla nihil nisi nam.</div>
          </div>
          <ul className="meal-time__list">
            <li className="meal-time__item">
              <img className="meal-time__image" src="img/meal-time_1.png" width="95" height="56" alt="Apple."></img>
              <div className="meal-time__column">
                <h3 className="meal-time__item-title">Apple</h3>
                <p className="meal-time__item-description">Lorem ipsum dolor sit</p>
                <p className="meal-time__weight">35 G</p>
                <p className="meal-time__calories">189 KCAL</p>
              </div>
              <div className="meal-time__column">
                <p className="meal-time__time">01:00</p>
                <p className="meal-time__format-time">PM</p>
              </div>
            </li>
            <li className="meal-time__item meal-time__item--accent">
              <img className="meal-time__image" src="img/meal-time_2.png" width="138" height="102" alt="Sandwich."></img>
              <div className="meal-time__column">
                <h3 className="meal-time__item-title">Sandwich</h3>
                <p className="meal-time__item-description">Lorem ipsum dolor sit</p>
                <p className="meal-time__weight">35 G</p>
                <p className="meal-time__calories">189 KCAL</p>
              </div>
              <div className="meal-time__column">
                <p className="meal-time__time">03:00</p>
                <p className="meal-time__format-time">PM</p>
              </div>
            </li>
            <li className="meal-time__item">
              <img className="meal-time__image" src="img/meal-time_3.png" width="112" height="62" alt="Salad with chicken."></img>
              <div className="meal-time__column">
                <h3 className="meal-time__item-title">Salad with chicken</h3>
                <p className="meal-time__item-description">Lorem ipsum dolor sit</p>
                <p className="meal-time__weight">220 G</p>
                <p className="meal-time__calories">189 KCAL</p>
              </div>
              <div className="meal-time__column">
                <p className="meal-time__time">05:30</p>
                <p className="meal-time__format-time">PM</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
