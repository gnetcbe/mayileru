import Link from "next/link";

const FactoryActCertification = () => {
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
                  src='assets/images/thumbs/sefac.jpg'
                  alt='Course Image'
                  className='rounded-12 cover-img transition-2'
                />
                
              </div>
              <div className='pt-32 pb-24 px-16 position-relative  tifont fw600'>
             
                <h2 className='mb-24 tifont fw600'>
                  {" "}
                 Factory Act Certification Services{" "}
                </h2>
                <h5 className='mb-14 fsize18 tifont fw600  ' >RM. MAYILERU & Co. offers a comprehensive suite of services to help industries comply with the statutory requirements of the Factories Act. Our offerings include:</h5>
 
                 <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
               Safety Certification for Industrial Equipment
                  </li>
                   <li>
                    {" "}
                    Preparation and Approval of Factory Layout Drawings
                  </li>
                   <li>
                    {" "}
                    Issuance of Stability, Installation & Construction Certificates
                  </li>
                   <li>
                    {" "}
                    Development of Onsite Emergency Plans
                  </li>

 

                  </ul>
                
                <h3 className='mb-16 pt-24 text-neutral-500  text-lg primary-font-color'>🧪 Safety Certification for Equipment</h3>
                 <div className='row gy-4'>
          <div className='col-lg-5'><img
                  src='assets/images/thumbs/fact.jpg'
                  alt='Course Image'
                  className='mb-16 mt-5'
                /></div>
           <div className='col-lg-7'> <p className='fw500'>Industries governed by the Factories Act are required to periodically test and certify equipment such as <strong>cranes, chain pulley blocks, power presses, and dust extraction systems</strong> to ensure safe operation. RM. MAYILERU &amp; Co. is officially recognized by the <strong>Government of Tamil Nadu</strong> as a <strong>Competent Person</strong> to conduct these tests and issue safety certificates. Our meticulous inspection process ensures compliance and operational safety.</p></div>
            </div>
            
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h3 className='mb-16 text-neutral-500 primary-font-color text-lg'>
                🏗️ Factory Layout & Drawing Approvals
                </h3>
                 <p className='fw500'>New factories must obtain approval from the Factory Inspectorate for their <strong>building plans and machinery layout</strong>. These plans must adhere to the specifications outlined in the Factories Act and Rules. With over <strong>two decades of experience</strong>, we prepare and submit compliant drawings and liaise with authorities to secure approvals efficiently. We also assist existing factories in updating their plans when machinery is added, removed, or relocated, ensuring smooth approval for expansions and modifications.
                </p>


                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h4 className='mb-16 text-neutral-500  primary-font-color text-lg'>
               📄 Stability, Installation & Construction Certificates
                </h4>
                 
                 

  <div className='row gy-4'>
          <div className='col-lg-5'><img
                  src='assets/images/thumbs/fact2.png'
                  alt='Course Image'
                  className='mb-16 mt-5'
                /></div>
           <div className='col-lg-7'>  <p className='fw500'>Factories are required to obtain:
                </p>

 <ul className='list-dotted fw500 d-flex flex-column gap-8'>
                  <li>
                    {" "}
              <strong>Building Stability Certificates</strong> every <strong>three years</strong>
                  </li>
                   <li>
                    {" "}
                    <strong>Installation and Construction Certificates</strong> following any approved changes
                  </li>



                  </ul>
 <p className='fw500'>Our team conducts thorough inspections and issues the necessary certificates 
  to maintain regulatory compliance.</p>
</div> </div>
                 
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h5 className='mb-16 text-neutral-500  primary-font-color text-lg'>
                🚨 Onsite Emergency Plan Preparation
                </h5>
                <p className='fw500'>Hazardous industries&mdash;such as those dealing with <strong>fertilizers, chemicals, powders, and solvents</strong>&mdash;must prepare a detailed <strong>Onsite Emergency Plan</strong>. We assist in:</p>
                
                   <ul className='list-dotted fw500 d-flex flex-column gap-8'>
                  <li>
                    {" "}
             Identifying potential hazards
                  </li>
                   <li>
                    {" "}
                  Defining mitigation and response strategies
                  </li>
  <li>
                    {" "}
                  Codifying evacuation procedures
                  </li>
                    <li>
                    {" "}
                  Training personnel for emergency handling
                  </li>  </ul>

 <p className='fw500'>Additionally, we offer <strong>Risk Analysis services</strong> to 
 assess exposure levels and refine emergency planning accordingly.</p>

                
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

export default FactoryActCertification;
