import FactoryActCertification from "@/components/FactoryActCertification";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "RM. Mayileru & Co - Factory Act Certification",
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
      <Breadcrumb title={"Factory Act Certification"} />

      {/* FactoryActCertification */}
      <FactoryActCertification />
 
      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
