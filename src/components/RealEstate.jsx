const RealEstate = () => {
  return (
    <div className='certificate '>
      <div className='container container--lg'>
        <div className='certificate-box primary-color px-16 bg-main-600 rounded-16'>
          <div className='container'>
            <div className='position-relative py-80'>
              <div className='row align-items-center'>
                <div className='col-xl-7'>
                  <div className='certificate__content tifont fw600'>
                     
                    <h2 className='text-white mb-40 fw-medium tifont fw600 wow bounceIn'>
                     Real Estate Consultancy
                    </h2>
                    <h3 className='text-white mb-10 fw-medium tifont fw600 wow bounceIn'> 1. Sale / Purchase:</h3>
                    <p className='text-white mb-40 fw-medium wow bounceIn' >The Company strives hard to serve the needy public in locating and getting them or disposing their Real Estate Property in a hastle free manner including legal clearance, inspection and registration formalities. The company recently undertook this measure in order to save public from the clutches unscrupulous brokers and middlemen. It will create a healthy platform in our office to make both the parties meet in a congenial atmosphere to clinch the deal and shake hands.
                    </p>
                   <h3 className='text-white mb-10 fw-medium tifont fw600 wow bounceIn'>2. Maintain Properties</h3>
                    <p className='text-white mb-40 fw-medium wow bounceIn' >NRI’s or parents visiting wards for months will like to have their house maintained periodically, taxes & bill paid and the house be kept & tidy for them to reenter as it they had not left the home. By this way you avoid getting hooked by a relative / friend from being exploited or taken for a ride.
                    </p>

                     <h3 className='text-white mb-10 fw-medium tifont fw600 wow bounceIn'> 3. Key Management:</h3>
                    <p className='text-white mb-40 fw-medium wow bounceIn' >Seller having settled elsewhere but intent to sell their property may leave the key management with us, whereby we shall do all the maintenance (periodically cleaning, payment of bill & subscription) showing the property to whoever like to visit the house for purchase / rent until the property is disposed or rented out. This save you from your dependence on a relative / friends also may subject you to a below market disposal.


                    </p>





                    <a
                      href=''
                      className='btn btn-white rounded-pill flex-align  tifont fw600 d-inline-flex gap-8 hover-bg-main-800 wow bounceInUp'
                    >
                     Poat Your Properties
                      <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                    </a>
                  </div>
                </div>
                <div className='col-xl-5 d-xl-block d-none'>
                  <div   data-aos='fade-up-left'>
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

export default RealEstate;
