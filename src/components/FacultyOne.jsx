import Link from "next/link";

const FacultyOne = () => {
  return (
    <section className='faculty pb-50 pt-50 bg-white'>
      <div className='container'>
        <div className='section-heading text-center'>
          <div className='flex-align d-inline-flex gap-8 mb-16   bounceInDown' data-wow-duration="1s"
  data-wow-once="true" >
             
            <h5 className='text-main-600 tifont primary-font-color mb-0'>
              What We Do
            </h5>
          </div>
          <h2 className='mb-24 tifont  bounceIn' data-wow-duration="1s"
  data-wow-once="true" >Our Services</h2>
          
        </div>
        <div className='row tifont fw600 gy-4'>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/auditing-services' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/saud.jpg'
                    alt='Course Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className=''>
                  
                   
                  <h4 className='mb-28'>
                    <Link href='/auditing-services' className='link tifont text-line-2'>
                      Auditing Services
                    </Link>
                  </h4>
                  <p>Our Company had been declared as the accredited energy auditors and several energy audits had been done .
 
</p>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/auditing-services'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    View More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/industrial-services' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/sindd.jpg'
                    alt='Course Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className=''>
                  
                  <h4 className='mb-28'>
                    <Link href='/industrial-services' className='link tifont text-line-2'>
                     Industrial Services
                    </Link>
                  </h4>
                 <p>We hold the necessary spares and personnel for repairing and servicing all the
                   lifting tackles and the other equipments.

</p>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/industrial-services'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    View More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/pollution-control-services' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/spol.jpg'
                    alt='Course Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className=''>
                  
                  <h4 className='mb-28'>
                    <Link href='/pollution-control-services' className='link tifont text-line-2'>
                      Pollution Control Services
                    </Link>
                  </h4>
                <p>We started with Projects like Tea Factory Waste Water Treatment and went on to deal with canteen wastewater treatment.

</p>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/pollution-control-services'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    View More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/chartered-engineers' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/scha.jpg'
                    alt='Course Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className=''>
                  
                  <h4 className='mb-28'>
                    <Link href='/chartered-engineers' className='link tifont text-line-2'>
                      Chartered Engineers
                    </Link>
                  </h4>
                   <p>Importing Spares for imported machines will be permitted only if a certificate by Charted Engineer...</p>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/chartered-engineers'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    View More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/explosive-license' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/sepl.jpg'
                    alt='Course Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className=''>
                   
                  <h4 className='mb-28'>
                    <Link href='/explosive-license' className='link tifont text-line-2'>
                      Explosive Certification
                    </Link>
                  </h4>
                   <p>To obtain Explosive License for storing petroleum products in large tanks for Industrial purposes.</p>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/explosive-license'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    View More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='scale-hover-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
              <div className='course-item__thumb rounded-12 overflow-hidden position-relative'>
                <Link href='/legal-consultancy' className='w-100 h-100'>
                  <img
                    src='assets/images/thumbs/sleg.jpg'
                    alt='Course Image'
                    className='scale-hover-item__img rounded-12 cover-img transition-2'
                  />
                </Link>
              </div>
              <div className='pt-32 pb-24 px-16 position-relative'>
                <div className=''>
                   
                  <h4 className='mb-28'>
                    <Link href='/legal-consultancy' className='link tifont text-line-2'>
                      Legal Consultancy
                    </Link>
                  </h4>
                 <p>Our founder RM. Mayileru preferred to become an advocate himself only after several of his earlier 
                  bitter experiences..</p>
                </div>
                <div className='flex-between gap-8 pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                  <Link
                    href='/legal-consultancy'
                    className='flex-align gap-8 text-main-600 hover-text-decoration-underline transition-1 fw-semibold'
                    tabIndex={0}
                  >
                    View More
                    <i className='ph ph-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </section>
  );
};

export default FacultyOne;
