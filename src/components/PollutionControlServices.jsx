import Link from "next/link";

const PollutionControlServices = () => {
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
                  src='assets/images/thumbs/sepol.jpeg'
                  alt='Course Image'
                  className='rounded-12 cover-img transition-2'
                />
                
              </div>
              <div className='pt-32 pb-24 px-16 position-relative  tifont fw600'>
             
                <h2 className='mb-24 tifont fw500'>
                  {" "}
                 Pollution Control Services{" "}
                </h2>
                <h5 className='mb-14 fsize18 tifont fw600  ' >RM. MAYILERU & Co. offers comprehensive pollution control solutions, combining consultancy expertise with turnkey project execution. Our services include:</h5>
                 
                 <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
                 Pollution Control Consultancy & Turnkey Projects

                  </li>
                   <li>
                    {" "}
                   Assistance in Obtaining Consent from the Pollution Control Board


                  </li>
                   
                  </ul>
                
                <h3 className='mb-16 pt-24 text-neutral-500  text-lg primary-font-color'>
                  🌊 Pollution Control Consultancy & Turnkey Projects
</h3>
                 <p className='fw500'>With a legacy dating back to the enforcement of the <strong>Pollution Control Act in 1986</strong>, we have been actively involved in designing and implementing wastewater treatment solutions. Our early projects included <strong>Tea Factory Wastewater Treatment</strong> and <strong>Canteen Effluent Management</strong>, eventually leading to the development of <strong>biodegradable treatment systems</strong> and <strong>biogas generation units</strong>.
                 </p>

                  <p className='fw500'>Today, we offer tailored solutions for all types of
                     wastewater treatment:</p>
 <ul className='list-dotted d-flex fw500 flex-column gap-8'>
                  <li>
                    {" "}
                 <b>Small-scale projects:</b> Consultancy and/or turnkey execution

                  </li>
                   <li>
                    {" "}
                  <b>Large-scale projects:</b> Consultancy with pilot plant demonstrations; execution handled by the client
                  </li>
                   
                  </ul>

                  <p className='fw500'>We also provide <strong>end-to-end solutions for air pollution control</strong>, managing projects from concept to commissioning with minimal hassle. Our focus remains on delivering <strong>cost-effective and technically sound solutions</strong>.</p>



                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h3 className='mb-16 text-neutral-500 primary-font-color text-lg'>
                 📝 Consent from Pollution Control Board

                </h3>
                 <p className='fw500'> <span lang="EN-IN">Industries often face challenges in securing the mandatory <strong>&ldquo;Consent to Establish&rdquo;</strong> and <strong>&ldquo;Consent to Operate&rdquo;</strong> from the Pollution Control Board. The process involves:</span></p>
               
               <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
                    Detailed form submissions

                  </li>
                   <li>
                    {" "}
                Preparation of annexures outlining future plans
                  </li>
                    <li>
                    {" "}
                	Inclusion of technical data with precision
                  </li>
                   
                  </ul>
            
 <p className='fw500'>We streamline this process by:	
                </p>
               <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
                    Organizing all required documentation

                  </li>
                   <li>
                    {" "}
                Liaising directly with regulatory authorities
                  </li>
                    <li>
                    {" "}
                	Ensuring compliance at every step
                  </li>
                   
                  </ul>

  <p className='fw500'>Our consultancy charges are reasonable and proportionate to the complexity of the effluent or emission treatment involved.
                </p>

                   
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

export default PollutionControlServices;
