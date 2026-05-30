import Link from "next/link";

const BannerOne = () => {
  return (
    <section className='banner py-30 position-relative overflow-hidden'>
      
      <div className='container'>
        <div className='row gy-5 align-items-center'>
          <div className='col-xl-5'>
            <div className='banner-content pe-md-4'>
              <div className='flex-align gap-8 mb-16' data-aos='fade-down'>
               
                <h5 className='text-main-600 mb-0'>
                  {" "}
                  Welcome to our company
                </h5>
              </div>
              <h1 className='display2 mb-24 wow bounceInLeft'>
               Departmental Services Concept{" "}
                <span
                  className='text-main-two-600 wow bounceInRight'
                  data-wow-duration='2s'
                  data-wow-delay='.5s'
                > 
                </span>
               
              </h1>
              <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                We have exemplified this by offering a host of technical services under one roof successfully....
              </p>
              <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                 
                <Link
                  href='/about'
                  className='btn btn-outline-main rounded-pill flex-align gap-8'
                  data-aos='fade-left'
                >
                  About Us
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-7'>
            <div className='banner-thumb position-relative'>
              <img
                src='assets/images/thumbs/baud.jpg'
                alt=''
                className='banner-thumb__img rounded-12 wow bounceIn'
                data-wow-duration='3s'
                data-wow-delay='.5s'
                data-tilt=''
                data-tilt-max={12}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
                data-tilt-scale='1.02'
              />
              
               
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
