import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export default function PriceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
