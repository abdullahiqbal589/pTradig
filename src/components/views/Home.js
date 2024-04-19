import React, { useRef, useEffect, useState } from "react";
import Header from "../layouts/Header";
function Home() {
    const [visibleIndex, setVisibleIndex] = useState(null);
    const divRefs = useRef([]);
    const imgRefs = useRef([]);
    const divRef = useRef(null);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling behavior
        });
      };
      const scrollToBottomDiv = () => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    useEffect(() => {
      const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const viewportMiddle = viewportHeight / 2;
  
        divRefs.current.forEach((ref, index) => {
          const divRect = ref.getBoundingClientRect();
          const divMiddle = divRect.top + divRect.height / 2;
          if (divMiddle >= 0 && divMiddle <= viewportMiddle) {
            setVisibleIndex(index);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <Header />
      <div className="p-home__top">
        <div className="u-mb-l" />
        <div className="p-home__top__inner">
          <h1 className="p-home__title">
            <span className="p-home__title__inner">Snipe and sell</span>
            <br className="u-d-inline u-d-none-sm" />
            <span className="p-home__title__inner">
              tokens
              <span className="u-d-inline u-d-none-sm">at</span>
            </span>
            <br />
            <span className="p-home__title__speed">
              <span className="p-home__title__speed__inner">
                <span className="u-d-inline-sm u-d-none">at</span>
                lightning speed
              </span>
            </span>
          </h1>
          <div className="js-login-wrapper">
            <div className="p-home__top__subtitle">
              Connect to start trading
              <span className="u-text-gradient-rainbow">SOL</span>
              now
            </div>
            <div className="js-login__error" />
          </div>
          <div className="js-signup__install">
            <div className="js-install-phantom u-font-size-s u-mb-m  u-d-none">
              Install Phantom and connect your wallet to log in.
            </div>
            <button className="c-btn p-home__btn js-login-deeplink">
              <img alt="" className="u-mr-xxs" src="/assets/imgs/phantom.svg" />
              Connect wallet
            </button>
          </div>
          <div className="c-login__error u-mx-0" />
          <div className="p-home__checkbox">
            <label className="c-checkbox u-mr-xxs" id="">
              <input
                autoComplete="off"
                defaultChecked=""
                className="c-checkbox__input js-connect-terms"
                name="terms"
                type="checkbox"
                defaultValue=""
              />
              <div className="c-checkbox__inner">
                <div className="c-icon c-icon--check c-checkbox__icon" />
                <div className="c-icon c-icon--minus c-checkbox__icon c-checkbox__icon--some" />
              </div>
            </label>
            By connecting, I agree to the
            <a className="u-mx-3xs" href="" target="_blank">
              Terms
            </a>
            &amp;
            <a className="u-mx-3xs" href="" target="_blank">
              Privacy
            </a>
          </div>
        </div>

        <div className="p-home__top__img">
          <img className="p-home__top__target" src="/assets/imgs/target.svg" />
          <img
            className="p-home__top__bg hide-m"
            src="/assets/imgs/top-bg.svg"
          />
          <img
            className="p-home__top__bg hide-d"
            src="/assets/imgs/top-bg-m.svg"
          />
          <img
            className="p-home__top__screen"
            src="/assets/imgs/screen_en.webp"
          />
          <img
            className="p-home__top__circles hide-m"
            src="/assets/imgs/bg-circles.svg"
          />
          <img
            className="p-home__top__circles hide-d"
            src="/assets/imgs/bg-circle-m"
          />
          <div className="p-home__top__line" />
        </div>
        <div className="p-home__top__line-bottom" />
        <div className="p-home__wins">
          <div className="u-d-flex u-align-items-center u-mb-xxs">
            <div className="c-icon c-icon--diamond" />
            <div className="p-home__wins__title">GAINS WITH PHOTON</div>
          </div>
          <div className="p-home__wins__item">
            BHQ...GKG sold $WYNN for
            <span className="p-home__wins__gain">+2,837%</span>
          </div>
          <div className="p-home__wins__item">
            HXf...jmx sold $HOPPY for
            <span className="p-home__wins__gain">+1,578%</span>
          </div>
          <div className="p-home__wins__item">
            FEC...yAS sold $BONG for
            <span className="p-home__wins__gain">+1,240%</span>
          </div>
        </div>
        <a
          className="p-home__scroll js-arrow-up"
          data-no-observer=""
          data-offset={200}
          data-selector="#home-traders"
          onClick={scrollToBottomDiv}
        >
          Scroll
          <div className="p-home__scroll__btn">
            <img
              className="p-home__scroll__icon"
              src="/assets/imgs/down-arrow.svg"
            />
          </div>
        </a>
      </div>
      <div className="p-home__traders" ref={divRef} id="home-traders"></div>
      <div className="p-home__discover" >
        <img className="hide-d c-icon--xxs" src="/assets/imgs/moons.svg" />
        <h2 className="p-home__discover__title">
          Built by traders
          <br />
          for traders
        </h2>
        <div className="p-home__discover__wrap">
          <div className="p-home__discover__item">
            <div
              ref={(ref) => (divRefs.current[0] = ref)}
              className={`p-home__discover__item__content js-home__screen ${
                visibleIndex === 0 ? "is-visible" : ""
              }`}
            >
              <img className="hide-m" src="/assets/imgs/moons.svg" />
              <img className="hide-d" src="/assets/imgs/screen1.webp" />
              <div className="p-home__discover__num">01.</div>
              <h3 className="p-home__discover__item__title">Discover</h3>
              <div className="p-home__discover__text">
                Discover new tokens and filter by your preferences.
              </div>
              <div className="js-login-wrapper">
                <div className="js-login__error" />
              </div>
            </div>
          </div>
          <div className="p-home__discover__item">
            <div
              ref={(ref) => (divRefs.current[1] = ref)}
              className={`p-home__discover__item__content js-home__screen ${
                visibleIndex === 1 ? "is-visible" : ""
              }`}
            >
              <img className="hide-d" src="/assets/imgs/screen2.webp" />
              <div className="p-home__discover__num">02.</div>
              <h3 className="p-home__discover__item__title">Monitor</h3>
              <div className="p-home__discover__text">
                Real-time security updates &amp; easily monitor your portfolio.
              </div>
              <div className="js-login-wrapper">
                <div className="js-login__error" />
              </div>
            </div>
          </div>
          <div className="p-home__discover__item">
            <div
              ref={(ref) => (divRefs.current[2] = ref)}
              className={`p-home__discover__item__content js-home__screen ${
                visibleIndex === 2 ? "is-visible" : ""
              }`}
            >
              <img className="hide-d" src="/assets/imgs/screen3.webp" />
              <div className="p-home__discover__num">03.</div>
              <h3 className="p-home__discover__item__title">
                Quick Buy and Sell
              </h3>
              <div className="p-home__discover__text">
                Trade faster with Photon with a speed advantage for every
                transaction.
              </div>
              <div className="js-login-wrapper">
                <div className="js-login__error" />
              </div>
            </div>
          </div>
          <div className="p-home__discover__screens hide-m">
            <div className="p-home__discover__screens__wrap">
              <div className="p-home__discover__screens__block">
              <img
              ref={ref => (imgRefs.current[0] = ref)}
              className={`p-home__discover__screens__img js-home__screen__img ${
                visibleIndex === 0 ? 'is-visible' : ''
              }`}
              src="/assets/imgs/screen1.webp"
            />
            <img
              ref={ref => (imgRefs.current[1] = ref)}
              className={`p-home__discover__screens__img js-home__screen__img ${
                visibleIndex === 1 ? 'is-visible' : ''
              }`}
              src="/assets/imgs/screen2.webp"
            />
            <img
              ref={ref => (imgRefs.current[2] = ref)}
              className={`p-home__discover__screens__img js-home__screen__img ${
                visibleIndex === 2 ? 'is-visible' : ''
              }`}
              src="/assets/imgs/screen3.webp"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-home__footer">
  <div className="p-home__footer__wrap u-position-relative">
    <h2 className="p-home__title p-home__title--footer p-home__title--sm u-mb-m">
      <span className="p-home__title__inner">Start Trading</span>
      In Less Than 30 Secs
    </h2>
    <div className="js-login-wrapper">
      <div className="js-login__error" />
    </div>
    <div className="js-signup__install">
      <div className="js-install-phantom u-font-size-s u-mb-m u-d-none">
        Install Phantom and connect your wallet to log in.
      </div>
      <button className="c-btn p-home__btn js-login-deeplink">
        <img
          alt=""
          className="u-mr-xxs"
          src="/assets/imgs/phantom.svg"
        />
        Connect wallet
      </button>
    </div>
    <div className="c-login__error u-mx-0" />
    <div className="p-home__checkbox u-justify-content-center">
      <label className="c-checkbox u-mr-xxs" id="">
        <input
          autoComplete="off"
          defaultChecked=""
          className="c-checkbox__input js-connect-terms"
          name="terms"
          type="checkbox"
          defaultValue=""
        />
        <div className="c-checkbox__inner">
          <div className="c-icon c-icon--check c-checkbox__icon" />
          <div className="c-icon c-icon--minus c-checkbox__icon c-checkbox__icon--some" />
        </div>
      </label>
      By connecting, I agree to the
      <a
        className="u-mx-3xs"
        href=""
        target="_blank"
      >
        Terms
      </a>
      &amp;
      <a
        className="u-mx-3xs"
        href=""
        target="_blank"
      >
        Privacy
      </a>
    </div>
    <a className="p-home__scroll js-arrow-up" onClick={scrollToTop}>
      Scroll
      <div className="p-home__scroll__btn">
        <img
          className="p-home__scroll__icon"
          src="/assets/imgs/up-arrow.svg"
        />
      </div>
    </a>
  </div>
  <div className="c-footer u-px-xl-lg">
    <div className="l-row u-justify-content-center u-justify-content-md-between u-align-items-center u-flex-column u-flex-sm-row">
      <div className="l-col-auto u-mb-s u-mb-0-sm">© Tiny Astro Inc. 2024</div>
      <div className="l-col-auto">
        <div className="l-row">
          <div className="l-col-auto">
            <a
              href=""
              target="_blank"
            >
              Terms of Use
            </a>
          </div>
          <div className="l-col-auto">
            <a
              href=""
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Home;
