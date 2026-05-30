import Link from "next/link";

const Valuation = () => {
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
                  src='assets/images/thumbs/seval.jpg'
                  alt='Course Image'
                  className='rounded-12 cover-img transition-2'
                />
                
              </div>
              <div className='pt-32 pb-24 px-16 position-relative  tifont fw600'>
             
                <h2 className='mb-24 tifont fw600'>
                  {" "}
                 Valuation Services{" "}
                </h2>
                <h5 className='mb-14 fsize18 tifont fw600  ' >RM. MAYILERU & Co. offers comprehensive valuation services across civil and mechanical domains, catering to individuals, companies, financial institutions, and government agencies. Our expertise spans:</h5>
  
                 <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
                Valuation of Civil and Mechanical Assets
                  </li>
                   <li>
                    {" "}
                    Valuation for Banks and Financial Institutions
                  </li>
                   <li>
                    {" "}
                    Stock Auditing
                  </li>
                   <li>
                    {" "}
                    Valuation for Partition and Division
                  </li>

 

                  </ul>
                
                <h3 className='mb-16 pt-24 text-neutral-500  text-lg primary-font-color'>🏗️ Valuation of Civil and Mechanical Assets</h3>
                 
            <p className='fw500'>As <strong>registered valuers</strong>, we specialize in assessing the value of <strong>land, buildings, plant, and machinery</strong>. Our valuations are accepted for purposes including <strong>income tax</strong>, <strong>sales tax</strong>, <strong>central excise</strong>, and submissions to various <strong>government departments and agencies</strong>. </p>
                
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h3 className='mb-16 text-neutral-500 primary-font-color text-lg'>
              🏦 Valuation for Banks & Financial Institutions 
                </h3>
                 <p className='fw500'>We are empanelled with premier financial institutions such as <strong>IDBI, ICICI, IFCI</strong>, and have completed over <strong>30,000 valuations</strong>, including high-value assets worth hundreds of crores. Our services are trusted by a wide range of nationalized and scheduled banks, including:
 
                </p>
      
        <ul className='list-dotted d-flex flex-column gap-8'> 
                  <li>
                    {" "}
              State Bank of India – TEV
                  </li>
                     <li>
                    {" "}
                Central Bank of India
                  </li>
                   <li>
                    {" "}
                    Punjab National Bank
                  </li>
                   <li>
                    {" "}
                    Canara Bank – Asset valuation, Sarfaesi
&amp; Legal
                  </li>
                
  <li>
                    {" "}
                    Axis Bank Ltd.
                  </li>
                   <li>
                    {" "}
                    Bank of Baroda
                  </li>
 
  <li>
                    {" "}
                    Bank of India
                  </li>
   <li>
                    {" "}
                    Uco bank
                  </li>
 <li>
                    {" "}
                    IDBI Bank Ltd.
                  </li>
 <li>
                    {" "}
                    	HUDCO
                  </li>
                  <li>
                    {" "}
                    	BSNL
                  </li>
 <li>
                    {" "}
                    	SVC Co-operative Bank Ltd.
                  </li>


<li>
                    {" "}
                    Provident Fund Dept.
                  </li>
                  <li>
                    {" "}
                    	Registration Department
                  </li>
                  </ul>

<br></br>
          <p className='fw500'>Our dedicated team of <strong>three highly qualified professionals</strong> ensures prompt delivery of valuation reports within <strong>2&ndash;3 working days</strong>. We also assist in arranging <strong>housing and industrial loans</strong> through nationalized banks.</p>




                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h4 className='mb-16 text-neutral-500  primary-font-color text-lg'>
              📦 Stock Auditing
                </h4>
                   <p className='fw500'>We conduct detailed <strong>stock audits</strong> for industries on behalf of their banking partners. Our experience allows us to:
                </p>
 <ul className='list-dotted d-flex flex-column gap-8'>
                  <li>
                    {" "}
                Classify goods by grade, quality, and operational stage
                  </li>
                   <li>
                    {" "}
                    Accurately assign market values
                  </li>
                   <li>
                    {" "}
                    Compare physical stock values with book records
                  </li>
 
                  </ul>
                  
                 <p className='fw500'>Supported by <strong>Chartered Accountants</strong>, we ensure thorough
                 documentation and can handle large-scale audits within <strong>a week</strong>.</p>
                 
                <span className='d-block border border-neutral-30 my-12 border-dashed' />
                <h5 className='mb-16 text-neutral-500  primary-font-color text-lg'>
               ⚖️ Valuation for Partition & Division
                </h5>
                <p className='fw500'>We provide impartial valuation services for asset partition among individuals, ensuring fair and amicable distribution. For companies considering <strong>mergers or divisions</strong>, we offer detailed <strong>item-wise valuation reports</strong> that serve as both inventory and asset documentation.
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

export default Valuation;
