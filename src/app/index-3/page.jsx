import AboutThree from "@/components/AboutThree";
import BannerThree from "@/components/BannerThree";
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
  title: "RM. Mayileru & Co",
  description:
    "Coimbatore based consulting firm rendering technical services to industries and public",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerThree */}
      <BannerThree />

      {/* InfoTwo 
      <InfoTwo />*/}

      {/* AboutThree */}
      <AboutThree />

      
      {/* FacultyOne */}
      <FacultyOne />

         {/* CertificateOne */}
      <CertificateOne />

      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
