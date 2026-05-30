import Link from "next/link";

const Breadcrumb = ({ title }) => {
  return (
    <section className='breadcrumb tifont fw600 py-50 bg-main-15 position-relative z-1 overflow-hidden mb-0' 
        style={{
    backgroundImage: `
      linear-gradient(90deg, rgba(7, 20, 49, 0.85) 0%, rgba(7, 20, 49, 0.7) 45.64%, rgba(7, 20, 49, 0.3) 61.57%, rgba(7, 20, 49, 0.1) 71.73%, rgba(7, 20, 49, 0) 100%),
      url('/assets/images/thumbs/breadcrumb-bg.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='breadcrumb__wrapper'>
              <h1 className='breadcrumb__title display-4 tifont text-white fw600 fw-semibold text-left'>
                {" "}
                {title}
              </h1>
              <ul className='breadcrumb__list d-flex align-items-left  text-white  justify-content-left gap-4'>
                <li className='breadcrumb__item'>
                  <Link
                    href='/'
                    className='breadcrumb__link text-neutral-500  text-white   hover-text-main-600 fw-medium'
                  >
                    <i className='text-lg d-inline-flex  text-white  ph-bold ph-house' />{" "}
                    Home /
                  </Link>
                </li>

                
                <li className='breadcrumb__item'>
                  <span className='text-main-two-600'> {title} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
