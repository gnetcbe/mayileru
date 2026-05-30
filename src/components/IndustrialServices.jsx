import Link from "next/link";

const IndustrialServices = () => {
  return (
    <div className='blog-page-section '>
      <div className='container'>
        <div className='flex-between gap-16 flex-wrap mb-40'>
        
          <div className='flex-align gap-16'>
             
            <button
              type='button'
              className='list-bar-btn text-xl w-40 h-40 bg-main-600 text-white rounded-8 flex-center d-lg-none'
            >
              <i className='ph-bold ph-funnel' />
            </button>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-8'>
            <div className='bg-main-25 rounded-16 p-12 border border-neutral-30'>
              <div className='rounded-12 overflow-hidden position-relative'>
                <img
                  src='assets/images/thumbs/seind.jpg'
                  alt='Course Image'
                  className='rounded-12 cover-img transition-2'
                />
                
              </div>
              <div className='pt-32 pb-24 px-16 position-relative  tifont fw600'>
             
                <h2 className='mb-24 tifont fw600'>
                  {" "}
                 Industrial Services{" "}
                </h2>
                <h5 className='mb-14 fsize18 tifont fw600  ' >Under this category, RM. MAYILERU & Co. offers specialized mechanical services that include:</h5>
                 
                 <ul className='list-dotted d-flex flex-column gap-8'>
                  
                   <li>
                    {" "}
                    Ultrasonic Thickness Test

                  </li>
                   
                   <li>
                    {" "}
                    Custom Crane Design

                  </li>
                  </ul>
                
                
                <h3 className='mb-16 pt-24 text-neutral-500 primary-font-color text-lg'>
                🔧 Ultrasonic Thickness Testing
                </h3>
                 <p className='fw500'> Monitoring the thickness of pressure vessels, pipelines, and containers during operation is a critical maintenance practice for industrial management. Many organizations prefer certified external agencies to perform this task with credibility and precision. As<b> Chartered Engineers</b>, we provide authoritative measurement, certification, and recommendations for necessary remedial actions. This service is executed in collaboration with our associate firm,
                  <b> MM Associates</b>, which specializes in ultrasonic thickness testing.



                </p>
               
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h5 className='mb-16 text-neutral-500  primary-font-color text-lg'>
                  🏗️ Custom Crane Design

                </h5>
                 <p className='fw500'> We offer tailored design solutions for various types of 
                  cranes—including<b> EOT, jib, and gantry cranes</b>—to meet specific client requirements in a cost-effective and reliable manner. Our deliverables include:
                     </p>
  <ul className='list-dotted d-flex flex-column gap-8'>
                  
                   <li>
                    {" "}
                    General Assembly Drawings

                  </li>
                   
                   <li>
                    {" "}
                    Detailed Part Drawings

                  </li>
                   <li>
                    {" "}
                    Fabrication-ready documentation for in-house or contractor-based execution

                  </li>
                  </ul>
              </div>
            </div>
            {/* Review Start */}
            
             
          </div>
          <div className='col-lg-4'>
           
         
            <div className='border border-neutral-30 rounded-12 bg-main-25 p-32 bg-main-25 '>
              <h4 className='mb-16 tifont fw600 '>Services</h4>
              <span className='d-block border border-neutral-30 my-24 border-dashed' />
              <div className='flex-align flex-wrap gap-8'>
                <Link
                  href='/auditing-services'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600  hover-text-main-600'
                >
                   <img src='assets/images/icons/check2.png' alt='' /> &nbsp;Auditing Services
                </Link><br></br>
                <Link
                  href='/industrial-services'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                  <img src='assets/images/icons/check2.png' alt='' /> &nbsp; Industrial Services
                </Link><br></br>
                <Link
                  href='/pollution-control-services'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                  <img src='assets/images/icons/check2.png' alt='' /> &nbsp; Pollution Control Services
                </Link><br></br>
                <Link
                  href='/chartered-engineers'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                  <img src='assets/images/icons/check2.png' alt='' /> &nbsp; Chartered Engg Certification
                </Link><br></br>
                <Link
                  href='/explosive-license'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                   <img src='assets/images/icons/check2.png' alt='' /> &nbsp;Explosive License
                </Link><br></br>
                <Link
                  href='/factory-act-certification'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                 <img src='assets/images/icons/check2.png' alt='' /> &nbsp;  Factory Act Certification
                </Link><br></br>
               
               
                <Link
                  href='/valuation'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                  <img src='assets/images/icons/check2.png' alt='' /> &nbsp; Valuation Services
                </Link><br></br>


                <Link
                  href='/legal-consultancy'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                  <img src='assets/images/icons/check2.png' alt='' /> &nbsp; Legal Consultancy Services
                </Link><br></br>


                <Link
                  href='/civil'
                  className='border border-neutral-30 px-20 py-12 rounded-pill text-sm bg-white text-neutral-500 hover-border-main-600 tifont fw600 hover-text-main-600'
                >
                 <img src='assets/images/icons/check2.png' alt='' /> &nbsp;  Civil
                </Link><br></br>

 



              </div>
             
               
            </div>
          </div>
        </div>
      </div>  <br></br> 
    </div>
  );
};

export default IndustrialServices;
