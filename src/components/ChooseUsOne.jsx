"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const ChooseUsOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='choose-us pt-20 mb-20  mt-10 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape six animation-scalation'
      />
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-6'>
            <div className='choose-us__content tifont fw600'>
              <div className='mb-40'>
                
                <h2 className='mb-24 tifont fw600  wow bounceIn'>
                 Background
                </h2>
                 
              </div>
              <ul>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={200}
                >
                  
                  <span className='flex-grow-1 text-neutral-500'>
                 RM. MAYILERU & Co. was founded in 1979 by Mr. RM. Mayileru, a graduate in Mechanical Engineering with seven years of hands-on experience in the machine shops of M/s. Ashok Leyland Ltd., Ennore, and Kemph India, Coimbatore.
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={400}
                >
                  
                  <span className='flex-grow-1 text-neutral-500'>
                 In the early years, Mr. Mayileru undertook assignments such as crane servicing and testing, civil planning, and construction supervision. His dedication, sincerity, and integrity quickly earned him trust and led to expanded responsibilities including valuation, inspection, and liaison services.
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  
                  <span className='flex-grow-1 text-neutral-500'>
                   With a growing demand across various sectors, he formally established RM. MAYILERU & Co. in 1983. The firm evolved into a collaborative enterprise, with associates joining to contribute and share in its success.
                  </span>
                </li>


 <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                 
                  <span className='flex-grow-1 text-neutral-500'>
                  Today, RM. MAYILERU & Co. operates as a multidisciplinary team of six graduate engineers, supported by a skilled technical and administrative workforce. Our capabilities span a wide range of services, strengthened by an in-house legal wing. Mr. RM. Mayileru, a practicing advocate, along with other legal professionals in our team, ensures that clients receive robust legal support whenever needed.

                  </span>
                </li>
                 <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  
                  <span className='flex-grow-1 text-neutral-500'>
                  We are now a cohesive unit of 20 highly skilled professionals, united by a work culture rooted in transparency and shared responsibility—where both duties and rewards are collectively embraced.
                  </span>
                </li>

                 <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  
                  <span className='flex-grow-1 text-neutral-500'>
                  Now, we are a crew of 20 highly skilled personnel working as a team solely due to 
                  the clarity of work culture infused by the founder namely it is not the 
                  responsibilities alone to be shared but also the proceeds.
                  </span>
                </li>

              </ul>
               
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='choose-us__thumbs position-relative'>
               
               
              <div className='text-end' data-aos='zoom-out'>
                <div className='d-sm-inline-block d-block position-relative'>
                  <img
                    src='assets/images/thumbs/scic.jpg'
                    alt=''
                    className='choose-us__img rounded-12'
                    data-tilt=''
                    data-tilt-max={16}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-full-page-listening=''
                  />
                 
                </div>
              </div>
              <div className='animation-video' data-aos='zoom-in'>
                <img
                  src='assets/images/thumbs/steam.jpg'
                  alt=''
                  className='border border-white rounded-circle border-3'
                  data-tilt=''
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </section>
  );
};

export default ChooseUsOne;
