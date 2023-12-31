import { Overpass } from "next/font/google";
import localFont from "next/font/local";
import Header from "@components/Header/Header";

import "./globals.scss";
import Footer from "@components/Footer/Footer";

export const overpass = Overpass({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const kyivtype = localFont({
  src: [
    {
      path: "../public/fonts/KyivTypeSans-Regular-.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});



export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={overpass.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
