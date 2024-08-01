import Header from "@/layouts/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | I Code U",
  description: "Home Page for I Code U",
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
