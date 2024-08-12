import type { Metadata } from "next";

import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export const metadata: Metadata = {
  title: "About | I Code U",
  description: "About Page for I Code U",
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
