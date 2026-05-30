import Head from "next/head";
import AboutThree from "@/components/AboutThree";
import BannerOne from "@/components/BannerOne";
import BlogTwo from "@/components/BlogTwo";
import BrandTwo from "@/components/BrandTwo";
import ChooseUsTwo from "@/components/ChooseUsTwo";
import CounterTwo from "@/components/CounterTwo";
import EventOne from "@/components/EventOne";
import FacultyOne from "@/components/FacultyOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import CertificateOne from "@/components/CertificateOne";
import InfoTwo from "@/components/InfoTwo";
import TestimonialsThree from "@/components/TestimonialsThree";
import VideoOne from "@/components/VideoOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "RM. MAYILERU & Co. – Technical Consulting, Energy Audits & Industrial Services in Coimbatore",
  description:
    "RM. MAYILERU & Co. offers expert technical consulting services in Coimbatore, including energy audits, pollution control, chartered engineering, legal consultancy, and explosive licensing.",
};


const page = () => {
  return (
    <>

     <Head>
            <meta
              name="keywords"
              content="technical consulting Coimbatore, energy audits India, industrial services Tamil Nadu, pollution control consultancy, chartered engineers, explosive license consultants, legal consultancy services"
            />
          </Head>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerThree */}
      <BannerOne />

      {/* InfoTwo 
      <InfoTwo />*/}

      {/* AboutThree */}
      <AboutThree />

      
      {/* FacultyOne */}
      <FacultyOne />
 
      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
