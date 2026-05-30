import Link from "next/link";

const ExploreCourseTwo = () => {
  return (
    <section className='explore-course py-50 bg-main-25 tifont fw600 position-relative z-1'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape six animation-scalation'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          
          <h2 className='mb-24 wow bounceIn tifont'>Clients</h2>
          <p className=' wow bounceInUp fw500'>
         Since our inception, RM. MAYILERU & Co. has steadily evolved into a benchmark of excellence, earning the trust of a diverse and prestigious clientele.  </p>
  <p className=' wow bounceInUp fw500'>
        Over the past three decades, we have proudly served more than <strong>1,000 long-standing clients</strong> and <strong>5,000 occasional customers</strong>, spanning a wide spectrum of industries. Our client portfolio ranges from leading corporate entities such as <strong>Lakshmi Machine Works</strong> to numerous small and medium-scale enterprises, reflecting our commitment to quality, reliability, and personalized service.</p>

<h2 className='mb-10 mt-20 wow bounceIn tifont'>Clients Categorized</h2>
         

        </div>
        <div className='text-center'>
          <div
            className='nav-tab-wrapper bg-white p-16 mb-40 d-inline-block'
            data-aos='zoom-out'
          >
          
            <ul
              className='nav nav-pills common-tab gap-16'
              id='pills-tab'
              role='tablist'
            >
               
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 active gap-8'
                  id='pills-design-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-design'
                  type='button'
                  role='tab'
                  aria-controls='pills-design'
                  aria-selected='true'
                > 
                  Engineering
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-programming-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-programming'
                  type='button'
                  role='tab'
                  aria-controls='pills-programming'
                  aria-selected='false'
                >
                  
                  Textiles
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-foundry-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-foundry'
                  type='button'
                  role='tab'
                  aria-controls='pills-foundry'
                  aria-selected='false'
                >
                   
                  Foundry
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-garments-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-garments'
                  type='button'
                  role='tab'
                  aria-controls='pills-garments'
                  aria-selected='false'
                >
                   
                  Garments
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-chemicals-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-chemicals'
                  type='button'
                  role='tab'
                  aria-controls='pills-chemicals'
                  aria-selected='false'
                >
                  
                  Chemicals
                </button>
              </li>

 <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-pumps-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-pumps'
                  type='button'
                  role='tab'
                  aria-controls='pills-pumps'
                  aria-selected='false'
                >
                  
                  Pumps
                </button>
              </li>


 <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-sugar-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-sugar'
                  type='button'
                  role='tab'
                  aria-controls='pills-sugar'
                  aria-selected='false'
                >
                   
                  Sugar Mill
                </button>
              </li>



 <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-tea-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-tea'
                  type='button'
                  role='tab'
                  aria-controls='pills-tea'
                  aria-selected='false'
                >
                 
                  Tea estate
                </button>
              </li>



 <li className='nav-item' role='presentation'>
                <button
                  className='nav-link rounded-pill bg-main-25 text-md fw-medium text-neutral-500 flex-center w-100 gap-8'
                  id='pills-others-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-others'
                  type='button'
                  role='tab'
                  aria-controls='pills-others'
                  aria-selected='false'
                >
                  
                  General
                </button>
              </li>



            </ul>
          </div>
        </div>
        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-design'
            role='tabpanel'
            aria-labelledby='pills-design-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Engineering</h2>
                   <ul className='grid-cols-2'>
  {[
    'Elgi Equipments Ltd',
    'LG Balakrishnan & Bros',
    'LGB Forge',
    'Lakshmi Electrical Control Systems',
    'Lakshmi Automatic Loom Works',
    'SE Electricals',
    'Hansel Drive',
    'Shanthi Gears Group',
    'Serval Engineering',
    'Trussor Machine Tools',
    'Sam Turbo Industries',
    'Craftsman Group of Companies',
    'Indoshell Group of Companies',
    'Flowlink Systems',
    'JSW Steels',
    'L&T Limited',
    'CPC Limited',
    'PRICOL',
    'High Precision',
    'Suguna Group',
    'VKS Forms',
    'INDO shell',
    'Auto shell',
    'Dresser Values',
    'Unimech Industries',
    'Lakshmi Technology & Engg Industries',
    'ELGI GROUP',
    'Salzer Electronics',
    'Unicon Engineers',
    'CRI Pumps LTD.,',
    'Flowtech Engineers',
    'Pricol Limited',
    'Rabwin Industries',
    'Everest Industries',
    'Messer Cutting Systems India Pvt Ltd',
    'L & T LTD',
     
    
     
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div>

      <div
            className='tab-pane fade  '
            id='pills-programming'
            role='tabpanel'
            aria-labelledby='pills-programming-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Textiles</h2>
                  <ul className='grid-cols-2'>
  {[
     
    'Primier Group',
    'Precot Meridian Group',
    'Gangothri Textiles',
    'Jeganath Textiles',
    'Leeds Spinning Mills',
    'KG Mills',
    'Thiyagarajar Mills',
    'Shanmugavel Group',
    'NTC Group',
    'Karthikeya Mills',
    'Soundararaja Mills',
    'Super Spinning Mills Group',
    'Tirupur Textiles',
    'Lakshmi Mill Group',
    'Ambal textile',
    'VJ textile',
    'Vijayeswari textiles',
    'Classic',
    'Sulotchana cotton',
    'Aswin ram spinning',
    'Amarjothi spinning mills',
    'Modern cotton yarn spinning mills',
    'Lakshmi Machine Works Limited',
    'Lakshmi Mills  Ltd.,',
    'Sri Shanmugavel Group of Mills ',
    'Eastman  Group', 


  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div>

  <div
            className='tab-pane fade  '
            id='pills-foundry'
            role='tabpanel'
            aria-labelledby='pills-foundry-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Foundry</h2>
                 <ul className='grid-cols-2'>
  {[
    'SE Forge',
    'Anugraha Valves',
    'PSG Foundry',
    'V R Foundry',
    'LRG Foundry',
    'Suguna Foundry',
    'Amex Alloys',
    'Bharath Fritz Werner',
    'Ranba Castings',
    'Sanfit',
    'Madura steel',
    'Angalamman alloys',
    'Perfect foundry machine',
    'Asia alloys',
    'Koso india pvt ltd',
    'UR casting',
    'Auto shell',
    'Sureeria alloys',
    'Ogun steels',
    'Raja steels',
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div>

            <div
            className='tab-pane fade  '
            id='pills-garments'
            role='tabpanel'
            aria-labelledby='pills-garments-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Garments</h2>
                 <ul className='grid-cols-2'>
  {[
    'Augustan Knitwear',
    'Meridian Apparel',
    "Poppy's Knitwear",
    'Armstrong Knitting',
    'SP Apparel Group',
    'Eastman Group',
    'SNQS International',
    'SCM Group',
    'Sakthi Knitting',
    'Corona limited',
    'BEST',
    'H&R Johnson',
    'SP Textiles',
    'Jupiter group',
    'Peril textiles',
    'Clifton group of company',
    'Classic knits',
    'SSM fine yarn',
    'Jayakumar exports',
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div> 


            <div
            className='tab-pane fade  '
            id='pills-chemicals'
            role='tabpanel'
            aria-labelledby='pills-chemicals-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Chemicals</h2>
                 <ul className='grid-cols-2'>
  {[
     'ACC Limited',
    'ITC Limited',
    'Malco Limited',
    'Chemplast Sanmar',
    'India Gypsum Limited',
    'India Cements',
    'Subburaj Paper Mills',
    'Dalmia cement',
    'SP textiles processors',
    'G.E.OIL & GAS',




  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div> 

   <div
            className='tab-pane fade  '
            id='pills-pumps'
            role='tabpanel'
            aria-labelledby='pills-pumps-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Pumps</h2>
                 <ul className='grid-cols-2'>
  {[
    'Sharp Industries',
    'Flowserve',
    'Aquasub Engineering',
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div> 


         <div
            className='tab-pane fade  '
            id='pills-sugar'
            role='tabpanel'
            aria-labelledby='pills-sugar-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Sugar Mill</h2>
                 <ul className='grid-cols-2'>
  {[
    'Bannari amman sugars',
    'Rajeswari sugars',
    'Government sugar plant',
    'Sathi sugars',
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div> 

   <div
            className='tab-pane fade  '
            id='pills-tea'
            role='tabpanel'
            aria-labelledby='pills-tea-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>Tea Estate</h2>
                 <ul className='grid-cols-2'>
  {[
    'Devan',
    'Juntoli',
    'Periya karamadai',
    'Mahaveer tea planters',
    'Iyyan group',
    'Padma tea factory',
    'VBT',
    'The United Nilgiri Tea Estates Co. Ltd.,',
    'FARMS India',
    'Stanes Amalgamated Estates Group',
    'Joonktollee Tea & Industries Ltd.',
      
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div>  


            <div
            className='tab-pane fade  '
            id='pills-others'
            role='tabpanel'
            aria-labelledby='pills-others-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-12 wow fadeInUp'
                data-aos='fade-up'
                data-aos-duration={200}
              >
                <div className='course-item bg-white rounded-16 p-12 h-100 box-shadow-md'>
                  
                  <div className='course-item__content position-relative'>
                      <h2 className='mb-20 mt-10 wow bounceIn tifont'>General</h2>
                 <ul className='grid-cols-2'>
  {[
    'South India Viscose',
    'ABT Maruthi',
    'Tata Motors',
    'IPS',
    'Ultra redimix',
    'KMCH',
    'Nikitha school',
    'Marutham steel',
    'PSG',
    'Salim & cloth',
    'VLB college',
    'Charnraj',
    'Stans',
    'SKM group',
    'Needles',
    'Hindustan photo flim',
    'Coimbatore expo',
    'Shiva automobiles',
    'Umesh penciles',
    'Human biological', 
    'R.K.G. Ghee (R.K.Ganapathy Chettiar)',
    'ITC LTD.',
    'T-Stanes Group Of Companies',
    'The Indian Public School',
    'Kirtilal Kalidas Group',
    'KLRF LTD.,  GROUP',
    'BSNL',
     
    
  ].map((company, index) => (
    <li
      key={index}
      className='flex-align gap-8'
      data-aos='fade-left'
      data-aos-duration={200 + index * 100}
    >
      <img src='assets/images/icons/check2.png' alt='' />
      <span className='text-neutral-500 text-md fw-medium'>{company}</span>
    </li>
  ))}
</ul>


                  </div>
                </div>
              </div>
               
            </div>
            
          </div> 

 
        </div>
      </div>
    </section>
  );
};

export default ExploreCourseTwo;
