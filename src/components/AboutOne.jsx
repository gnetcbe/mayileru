"use client";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutOne = () => {
  return (
    <section className='about py-50 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape6.png'
        alt=''
        className='shape four animation-scalation'
      />
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 flex-wrap-reverse align-items-center'>
            <div className='col-xl-6'>
              <div className='about-thumbs position-relative pe-lg-5'>
                <img
                  src='assets/images/shapes/shape7.png'
                  alt=''
                  className='shape seven animation-scalation'
                />
                
                <div className='row gy-4'>
                  <div className='col-sm-6'>
                    <img
                      src='assets/images/thumbs/abt-leg.jpg'
                      alt=''
                      className='rounded-12 w-100'
                      data-tilt=''
                      data-tilt-max={15}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                  <div className='col-sm-6'>
                    <div className='flex-align gap-24 mb-24'>
                      <div
                        className='bg-main-600 primary-color rounded-12 text-center py-24 px-2 w-50-percent'
                        data-aos='fade-right'
                      >
                        <VisibilitySensor
                          partialVisibility
                          offset={{ bottom: 200 }}
                        >
                          {({ isVisible }) => (
                            <h1 className='mb-0 text-white counter'>
                              {isVisible ? <CountUp end={45} /> : null}  +
                            </h1>
                          )}
                        </VisibilitySensor>
                        <span className='text-white'>Years of experience</span>
                      </div>
                      
                    </div>
                    <img
                      src='assets/images/thumbs/abt-aud.jpg'
                      alt=''
                      className='rounded-12 w-100'
                      data-tilt=''
                      data-tilt-max={20}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='about-content tifont fw600'>
                <div className='mb-25'>
                  
                  <h2 className='mb-14 wow  tifont fw600 bounceIn'>
                   RM. MAYILERU & Co.
                  </h2>
                  <p className=' tifont fw600  wow bounceInUp'>
                  RM. MAYILERU & Co. is a consulting firm based in Coimbatore, dedicated to delivering a wide array of technical services to both industrial and public sectors. Our diverse expertise across multiple domains has earned our service portfolio the distinction of being a true <strong>“Spectrum of Activities.”</strong></p>
                   <p className=' tifont fw600  wow bounceInUp'>
                  By seamlessly integrating various technical solutions under one roof, we have successfully demonstrated the effectiveness of the <strong>Departmental Services Concept </strong>, offering clients a unified and efficient approach to their needs.
                  </p>

               <h2 className='mb-14 mt-14 wow  tifont fw600 bounceIn'>
                 Policy
                  </h2>
                   <p className=' tifont fw600  wow bounceInUp'>
                <strong>Policy Statement </strong> at  RM. MAYILERU & Co., <strong>integrity and loyalty to our clients</strong> are the  guiding principles that have earned us a respected position in the industry—values we continue to uphold with unwavering commitment. We consistently strive to exceed client expectations through dedicated service and transparent communication.
                  </p>
 <p className=' tifont fw600  wow bounceInUp'>
               Our pursuit of continuous learning and exploration into new domains enables us to cater to the evolving needs of clients across diverse sectors.
                  </p>
                   <p className=' tifont fw600  wow bounceInUp'>
               When a client approaches us with queries on unfamiliar subjects, we never leave them unanswered. Instead, we proactively research, gather insights, and share our understanding—ensuring they receive informed guidance. This commitment to learning and responsiveness has been instrumental in shaping the broad spectrum of services we offer today.
                  </p>
                   <p className=' tifont fw600  wow bounceInUp'>
           We also embrace the philosophy that <strong>“a client has the right to be wrong.”</strong> It is often their lack of information that brings them to us, and it is our responsibility—as trusted consultants—to clarify, educate, and empower them with the right knowledge.
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

export default AboutOne;
