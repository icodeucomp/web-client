import type { Metadata } from "next";

import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export const metadata: Metadata = {
  title: "Service | I Code U",
  description: "Service Page for I Code U",
};

export default function ServiceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
