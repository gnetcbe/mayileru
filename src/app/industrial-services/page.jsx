import Head from "next/head";
import IndustrialServices from "@/components/IndustrialServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Industrial Services – Factory Licensing, Safety Compliance & Technical Support | RM. MAYILERU & Co",
  description:
    ". MAYILERU & Co. offers industrial services including factory licensing, safety compliance, technical documentation, and setup support for manufacturing units across Tamil Nadu and India",
};

const page = () => {
  return (
    <>
     <Head>
        <meta
          name="keywords"
          content="industrial services India, factory licensing Tamil Nadu, safety compliance consultants, RM. MAYILERU & Co., technical documentation support, manufacturing setup assistance"
        />
      </Head>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Industrial Services"} />

      {/* IndustrialServices */}
      <IndustrialServices />
 
      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
