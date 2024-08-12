import type { Metadata } from "next";

import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export const metadata: Metadata = {
  title: "Home | I Code U",
  description: "Home Page for I Code U",
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
