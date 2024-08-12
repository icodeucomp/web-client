import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Detail | I Code U",
  description: "Product Detail Page for I Code U",
};

export default function ProductDetailLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
