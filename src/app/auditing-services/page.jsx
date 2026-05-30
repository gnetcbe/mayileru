import Head from "next/head";
import AuditingServices from "@/components/AuditingServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertificateOne from "@/components/CertificateOne";
import FooterThree from "@/components/FooterThree";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Auditing Services – Energy, Safety & Compliance Audits by RM. MAYILERU & Co.",
  description:
    "RM. MAYILERU & Co. provides professional auditing services including energy audits, safety inspections, and regulatory compliance consulting for industries across Tamil Nadu and India.",
};

const page = () => {
  return (
    <>
     <Head>
        <meta
          name="keywords"
          content="energy audit services, safety audits Tamil Nadu, industrial compliance audits, RM. MAYILERU & Co., Coimbatore auditing consultants, regulatory audit India"
        />
      </Head>
      {/* Animation */}
      <Animation />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Auditing Services"} />

      {/* AuditingServices */}
      <AuditingServices />
 
      {/* FooterOne */}
      <FooterThree />
    </>
  );
};

export default page;
