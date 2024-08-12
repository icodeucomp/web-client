import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Detail | I Code U",
  description: "Service Detail Page for I Code U",
};

export default function ServiceDetailLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
