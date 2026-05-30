"use client";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutThree = () => {
  return (
    <section className='about-three py-50 position-relative z-1 bg-main-25 overflow-hidden'>
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6 pe-xl-5'>
              <div className='about-three-thumbs position-relative me-xxl-5'>
                <div className='row gy-4'>
                  <div className='col-sm-8'>
                    <img
                      src='assets/images/thumbs/scra.jpg'
                      alt=''
                      className='about-three-thumbs__one rounded-16 w-100'
                      data-tilt=''
                      data-tilt-max={16}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                    />
                  </div>
                  <div className='col-sm-4'>
                    <div
                      className='bg-main-three-600 primary-color rounded-16 text-center py-24 px-2 mb-24'
                      data-tilt=''
                      data-tilt-max={30}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-transition='1s'
                      data-tilt-full-page-listening=''
                    >
                      <VisibilitySensor
                        partialVisibility
                        offset={{ bottom: 200 }}
                      >
                        {({ isVisible }) => (
                          <h2 className='mb-16 text-white counter'>
                            {isVisible ? <CountUp end={45} /> : null}+
                          </h2>
                        )}
                      </VisibilitySensor>
                      <span className='text-white'>
                        Years of Experience
                      </span>
                      
                    </div>
                    <img
                      src='assets/images/thumbs/sval.jpg'
                      alt=''
                      className='about-three-thumbs__two rounded-16 w-100'
                      data-tilt=''
                      data-tilt-max={30}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='about-three-content'>
                <div className='mb-40'>
                  <div className='flex-align d-inline-flex gap-8 mb-16  tifont bounceInDown'>
                    
                    <h5 className='text-main-600 primary-font-color mb-0'>Departmental Service Concept</h5>
                  </div>
                  <h2 className='mb-24 tifont  bounceInRight'>
                   RM. MAYILERU & Co
                  </h2>
                  <p className='text-neutral-500 fw600 tifont fsize17  bounceInUp'>
                   At RM. MAYILERU & Co., we take pride in delivering a comprehensive suite of technical services under one roof—an approach that truly embodies our <strong>Departmental Service Concept.</strong> 
                  </p>
              <p className='  tifont fw600 fsize17 bounceInUp'>
                Based in Coimbatore, RM. MAYILERU & Co. is a consulting firm dedicated to serving both industrial and public sectors. Our expertise spans multiple domains, earning our service portfolio the title <strong>“Spectrum of Activities.”</strong> This integrated model allows us to provide diverse technical solutions efficiently and effectively, reinforcing our commitment to excellence through unified service delivery.
                  </p>

                </div>
                 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
