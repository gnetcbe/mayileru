import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";
 
 

export const metadata = {
  title: "RM. Mayileru & Co",
  description:
    "Coimbatore based consulting firm rendering technical services to industries and public",
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
