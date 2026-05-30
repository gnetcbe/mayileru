"use client";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import Link from "next/link";
const BannerThree = () => {
  const sliderRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let WOW;
    if (typeof window !== "undefined") {
      WOW = require("wowjs");
      const wowInstance = new WOW.WOW({ live: false });
      wowInstance.init();
    }
  }, []);

  const handleBeforeChange = () => {
    if (typeof document !== "undefined") {
      const wowElements = document.querySelectorAll(".wow");
      wowElements.forEach((el) => {
        el.style.visibility = "hidden";
        el.classList.remove("animated");
      });
    }
  };

  const handleAfterChange = () => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      const wowInstance = new WOW.WOW({ live: false });
      wowInstance.init();

      const wowElements = document.querySelectorAll(".wow");
      wowElements.forEach((el) => {
        el.style.visibility = "visible";
      });
    }
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    infinite: true,
    fade: true,

    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };
  return (
    <section className='banner-three position-relative responsive-arrow overflow-hidden'>
      <button
        type='button'
        id='banner-three-prev'
        onClick={() => sliderRef.current.slickPrev()}
        className='slick-arrow-prev slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute ms-16 inset-inline-start-0 top-50 translate-middle-y z-3'
      >
        <i className='ph-bold ph-arrow-left' />
      </button>
      <button
        type='button'
        id='banner-three-next'
        onClick={() => sliderRef.current.slickNext()}
        className='slick-arrow-next slick-arrow flex-center rounded-circle bg-white text-main-600 hover-border-main-600 text-2xl hover-bg-main-600 hover-text-white transition-1 w-56 h-56 position-absolute me-16 inset-inline-end-0 top-50 translate-middle-y z-3'
      >
        <i className='ph-bold ph-arrow-right' />
      </button>
      <Slider ref={sliderRef} {...settings} className='banner-three__slider '>
        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${"/assets/images/thumbs/s1.jpg"})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow  tifont bounceInDown'>
                      <span className='bg-dark-red  text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='bg-dark-red tifont mb-0 fw-medium'>
                        Departmental Services Concept
                      </h5>
                    </div>
                    <h1 className='display5 mb-24 text-white fw-bold wow tifont bounceInLeft'>
                   
                      <span
                        className='bg-dark-red  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'
                      >
                        {" "}
                        Industrial {" "}
                      </span>{" "}
                      Services
                    </h1>
                    <p className='text-white text-line-2 tifont wow bounceInDown'>
                     We hold the necessary spares and personnel for repairing and servicing all the lifting tackles and other equipments.
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                   
                    <div
                      className='flex-align gap-16  wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      <Link
                         href='/course'
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'
                      >
                        <i className='ph-fill ph-play' />
                      </Link>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${"/assets/images/thumbs/s3.jpg"})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow tifont bounceInDown'>
                      <span className='bg-dark-red  text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='bg-dark-red tifont mb-0 fw-medium'>
                        Departmental Services Concept
                      </h5>
                    </div>
                    <h1 className='display5 mb-24 text-white fw-bold wow tifont bounceInLeft'>
                   
                      <span
                        className='bg-dark-red  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'
                      >
                        {" "}
                        Legal{" "} 
                      </span>{" "}
                      Consutancy
                    </h1>
                    <p className='text-white text-line-2 wow tifont bounceInDown'>
                     Our Company had been declared as the accredited energy auditors and several energy audits had been done over different type of Industries.
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                   
                    <div
                      className='flex-align gap-16  tifont wow bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      <Link
                         href='/course'
                        className='play-button position-relative z-1 w-48 h-48 flex-center tifont bg-main-two-600 text-white rounded-circle text-xl'
                      >
                        <i className='ph-fill ph-play' />
                      </Link>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <div
            className='banner-three__item background-img bg-img linear-overlay position-relative'
            style={{
              backgroundImage: `url(${"/assets/images/thumbs/s2.jpg"})`,
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-8 col-lg-10 z-1'>
                  <div className='banner-content pe-md-4'>
                    <div className='flex-align gap-8 mb-16 wow tifont bounceInDown'>
                      <span className='bg-dark-red  text-2xl d-flex'>
                        <i className='ph-bold ph-book-open' />
                      </span>
                      <h5 className='bg-dark-red tifont mb-0 fw-medium'>
                        Departmental Services Concept
                      </h5>
                    </div>
                    <h1 className='display5 mb-24 text-white fw-bold wow tifont bounceInLeft'>
                   
                      <span
                        className='bg-dark-red  wow bounceInRight'
                        data-wow-duration='2s'
                        data-wow-delay='.5s'
                      >
                        {" "}
                        Auditing{" "}
                      </span>{" "}
                      Services
                    </h1>
                    <p className='text-white text-line-2 wow tifont bounceInDown'>
                     Our Company had been declared as the accredited energy auditors and several energy audits had been done over different type of Industries.
                    </p>
                  </div>
                  <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                   
                    <div
                      className='flex-align gap-16  wow  tifont bounceInRight'
                      data-wow-duration='1s'
                      data-wow-delay='.5s'
                    >
                      <Link
                         href='/course'
                        className='play-button position-relative z-1 w-48 h-48 flex-center bg-main-two-600 text-white rounded-circle text-xl'
                      >
                        <i className='ph-fill ph-play' />
                      </Link>
                      <Link
                        href='/course'
                        className='text-white hover-text-decoration-underline hover-text-main-two-600'
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default BannerThree;
