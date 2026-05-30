const CertificateOne = () => {
  return (
    <div className='certificate '>
      <div className='container container--lg'>
        <div className='certificate-box primary-color px-16 bg-main-600 rounded-16'>
          <div className='container'>
            <div className='position-relative py-80'>
              <div className='row align-items-center'>
                <div className='col-xl-6'>
                  <div className='certificate__content tifont fw600'>
                     
                    <h2 className='text-white mb-40 fw-medium tifont fw600 wow bounceIn'>
                     Real Estate
                    </h2>
                    <p className='text-white mb-40 fw-medium wow bounceIn' >The Company strives hard to serve the needy public in locating and getting them or disposing their Real Estate Property in a hastle free manner including legal clearance, inspection and registration formalities.</p>
                    <a
                       href='/real-estate'
                      className='btn btn-white rounded-pill flex-align  tifont fw600 d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp'
                    >
                     Post Your Properties
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </a>
                  </div>
                </div>
                <div className='col-xl-6 d-xl-block d-none'>
                  <div className='certificate__thumb' data-aos='fade-up-left'>
                    <img
                      src='assets/images/thumbs/real.jpg'
                      alt=''
                      data-tilt=''
                      data-tilt-max={8}
                      data-tilt-speed={500}
                      data-tilt-perspective={5000}
                      data-tilt-full-page-listening=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateOne;
