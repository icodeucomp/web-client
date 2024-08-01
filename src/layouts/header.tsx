import Container from "@/components/container";
import Images from "@/components/images";
import Link from "next/link";
import { MdArrowCircleRight } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed top-0 w-full py-4 z-1000">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Images className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" src="/icons/logo-icodeu.svg" alt="logo i code u" />
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl font-red-hat">ICodeU</h1>
        </Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Service</Link>
          <Link href="/">Pricing</Link>
        </div>
        <Link href="/" className="flex items-center gap-2">
          Contact Us
          <MdArrowCircleRight size={20} />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
