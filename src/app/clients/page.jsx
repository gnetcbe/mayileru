import AboutOne from "@/components/AboutOne";
import BrandTwo from "@/components/BrandTwo";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import ChooseUsOne from "@/components/ChooseUsOne";
import CounterOne from "@/components/CounterOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import InstructorOne from "@/components/InstructorOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";
import ExploreCourseTwo from "@/components/ExploreCourseTwo";

export const metadata = {
  title: "RM. Mayileru & Co - Real Estate",
  description:
    "Coimbatore based consulting firm rendering technical services to industries and public",
};


const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Clients"} />

      {/* ExploreCourseTwo */}
      <ExploreCourseTwo />
  
 
      {/* FooterThree */}
      <FooterThree />
    </>
  );
};

export default page;
