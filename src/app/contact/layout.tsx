import type { Metadata } from "next";

import Header from "@/layouts/header";

export const metadata: Metadata = {
  title: "Contact Us | I Code U",
  description: "Contact Us Page for I Code U",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
