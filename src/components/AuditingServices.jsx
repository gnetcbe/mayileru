import Link from "next/link";

const AuditingServices = () => {
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
                  src='assets/images/thumbs/seaud.jpg'
                  alt='Course Image'
                  className='rounded-12 cover-img transition-2'
                />
                
              </div>
              <div className='pt-32 pb-24 px-16 position-relative  tifont fw600'>
               <h2 className='mb-24 tifont fw600'>
                  {" "}
                 Auditing Services{" "}
                </h2>
                <h5>Comprehensive Audit & Technical Services</h5>
 <p className='fw600'>At RM. MAYILERU & Co., we offer a wide range of specialized audit services designed to enhance operational efficiency, ensure regulatory compliance, and promote sustainable practices across industries. Our core services include:</p>
             
                 <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
                  Energy Audit
                  </li>
                   <li>
                    {" "}
                    Safety Audit
                  </li>
                   <li>
                    {" "}
                    Environmental Audit
                  </li>
                   <li>
                    {" "}
                    Steam Audit
                  </li>
                   <li>
                    {" "}
                    Air Audit
                  </li>
                  </ul>
                
                <h3 className='mb-16 pt-24 text-neutral-500 text-lg primary-font-color'>⚡ Energy Audit</h3>
                 <p className='fw500'>In line with government mandates, all major industries are required to conduct energy audits to avoid penalties.
                 RM. MAYILERU & Co. is an   <b>Accredited Energy Auditor, certified by the Bureau of Energy Efficiency (BEE), Government of India</b>. We have successfully conducted audits across various sectors, recommending actionable measures that have led to significant energy savings.
Industries—both large and small—can benefit from our systematic approach to reducing energy costs.
</p>
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h3 className='mb-16 text-neutral-500 primary-font-color text-lg'>
                 🛡️ Safety Audit
                </h3>
                 <p className='fw500'>Industries such as foundries, fertilizer plants, and solvent extraction units are classified as hazardous under the <b>Factories Act</b> and must undergo periodic safety audits. Our audits are conducted by seasoned professionals, including <b> a retired Chief Inspector of Factories </b> and <b>a retired Chief Electrical Engineer</b>, whose expertise ensures practical and effective safety recommendations.
Our three decades of multidisciplinary experience make us a preferred choice for safety compliance. 

                </p>
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h4 className='mb-16 text-neutral-500  primary-font-color text-lg'>
                 🌱 Environmental Audit
                </h4>
                 <p className='fw500'>Global importers increasingly demand environmentally responsible practices from Indian suppliers. RM. MAYILERU & Co. conducts <b> environmental audits </b>for exporters and domestic firms and Educational Institutions issuing reports that meet both Indian and international standards.
As Chartered Engineers, we are authorized to provide audit reports required under the <b>Companies Act </b>and <b>the Pollution Control Act</b>, helping clients maintain compliance and enhance their environmental credibility.
With over 15 years of experience in this domain, our audits are trusted and widely accepted.

                </p>
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h5 className='mb-16 text-neutral-500  primary-font-color text-lg'>
                  🔥 Steam Audit
                </h5>
                 <p className='fw500'> Thermal energy is a critical yet often overlooked area of energy conservation.
                   Our team identifies heat losses and recommends solutions that can reduce fuel bills up to<b> 10%</b>, contributing to more efficient thermal energy use. </p>

                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h4 className='mb-16 text-neutral-500  primary-font-color text-lg'>
                  💨 Air Audit
                </h4>
                <p className='fw500'> Compressed air systems typically account for <b>7–10%</b> of an industry’s power bill, 
                yet operate at only <b>20–30% </b>efficiency. Through our audits, we help improve efficiency to <b>50%</b>, 
                resulting in a <b>2% reduction in overall power costs.</b>
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

export default AuditingServices;
