import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export default function ServiceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
