import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import ContactInner from "@/components/ContactInner";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
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
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact Us"} />

      {/* ContactInner */}
      <ContactInner />
 
     {/* FooterThree */}
      <FooterThree />
  
    </>
  );
};

export default page;
