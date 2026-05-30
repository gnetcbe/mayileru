import PollutionControlServices from "@/components/PollutionControlServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "RM. Mayileru & Co - Pollution Control Services",
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
      <Breadcrumb title={"Pollution Control Services"} />

      {/* PollutionControlServices */}
      <PollutionControlServices />
 
      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
