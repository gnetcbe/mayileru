import Link from "next/link";

const FooterThree = () => {
  return (
    <footer className='footer bg-neutral-900 position-relative z-1'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape five animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape one animation-scalation'
      />
      <div className='py-50 tifont '>
        <div className='container container-two'>
          <div className='row gy-5'>
            <div
              className='col-lg-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={400}
            >
              <div className='footer-item'>
                <h4 className='footer-item__title tifont fw-medium text-white mb-32'>
                  Quick Link
                </h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      href='/about'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      About us
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/auditing-services'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Services
                    </Link>
                  </li>
                 
                  <li className='mb-16'>
                    <Link
                      href='/contact'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='/clients'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Clients
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='footer-item'>
                <h4 className='footer-item__title fw-medium tifont text-white mb-32'>
                  Services
                </h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      href='/industrial-services'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Industrial Services
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/auditing-services'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Audits
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/pollution-control-services'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Pollution Control Services
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/chartered-engineers'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Chartered Engineers Certification
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/explosive-license'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Explosive License
                    </Link>
                  </li>

               


                </ul>
              </div>
            </div>
<div
              className='col-lg-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='footer-item'>
                <h4 className='footer-item__title fw-medium tifont text-white mb-32'>
                  Services
                </h4>
                <ul className='footer-menu'>
                  
                  

                <li className='mb-16'>
                    <Link
                      href='/factory-act-certification'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Factory Act Certification
                    </Link>
                  </li>
  <li className='mb-16'>
                    <Link
                      href='/valuation'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Valuation
                    </Link>
                  </li>
 <li className='mb-16'>
                    <Link
                      href='/legal-consultancy'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Legal Consultancy
                    </Link>
                  </li>
<li className='mb-16'>
                    <Link
                      href='/civil'
                      className='text-white hover-text-main-600 hover-text-decoration-underline'
                    >
                      Civil
                    </Link>
                  </li>


                </ul>
              </div>
            </div>


            <div
              className='col-lg-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='footer-item'>
                <h4 className='footer-item__title tifont fw-medium text-white mb-32'>
                  Contact Us
                </h4>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-phone' />
                  </span>
                  <div className=''>
                    <Link
                      href='/tel:+91-422-2497455'
                      className='text-white d-block hover-text-main-600 mb-4'
                    >
                    +91-422-2497455
                    </Link>
                    <Link
                      href='/tel:+91-9345732419'
                      className='text-white d-block hover-text-main-600 mb-0'
                    >
                     +91-9345732419
                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-envelope-open' />
                  </span>
                  <div className=''>
                    <Link
                      href='/mailto:mayileruandco@gmail.com'
                      className='text-white d-block hover-text-main-600 mb-4'
                    >
                    mayileruandco@gmail.com

                    </Link>
                    
                  </div>
                </div>
                
              </div>
            </div>
             
          </div>
        </div>
      </div>
      <div className='container'>
        {/* bottom Footer */}
        <div className='bottom-footer tifont border-top border-dashed border-neutral-600 border-0 py-32'>
          <div className='container container-two'>
            <div className='bottom-footer__inner flex-between gap-16 flex-wrap'>
              
              <p
                className='text-white text-line-1 fw-normal'
                data-aos='zoom-in'
              >
                {" "}
                Copyright © 2025 <span className='fw-semibold'>RM. MAYILERU & Co</span> All
                Rights Reserved.
              </p>

               {/* bottom Footer  
              <ul
                className='social-list flex-align gap-24'
                data-aos='zoom-in-left'
              >
                <li className='social-list__item'>
                  <Link
                    href='https://www.facebook.com'
                    className='text-white text-2xl hover-text-main-two-600'
                  >
                    <i className='ph-bold ph-facebook-logo' />
                  </Link>
                </li>
                <li className='social-list__item'>
                  <Link
                    href='https://www.twitter.com'
                    className='text-white text-2xl hover-text-main-two-600'
                  >
                    <i className='ph-bold ph-twitter-logo' />
                  </Link>
                </li>
                <li className='social-list__item'>
                  <Link
                    href='https://www.linkedin.com'
                    className='text-white text-2xl hover-text-main-two-600'
                  >
                    <i className='ph-bold ph-instagram-logo' />
                  </Link>
                </li>
                <li className='social-list__item'>
                  <Link
                    href='https://www.pinterest.com'
                    className='text-white text-2xl hover-text-main-two-600'
                  >
                    <i className='ph-bold ph-pinterest-logo' />
                  </Link>
                </li>
              </ul>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
