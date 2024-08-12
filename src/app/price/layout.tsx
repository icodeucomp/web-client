import type { Metadata } from "next";

import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export const metadata: Metadata = {
  title: "Price | I Code U",
  description: "Price Page for I Code U",
};

export default function PriceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
