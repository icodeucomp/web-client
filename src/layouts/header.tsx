"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import Link from "next/link";

import Container from "@/components/container";
import Images from "@/components/images";

import { MdArrowCircleRight } from "react-icons/md";

const Header = () => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("");

  const pricePathname =
    pathname === "/price" || pathname.split("/")[2] === "service" || pathname.split("/")[2] === "product" ? "text-orange" : "text-light";

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    });
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setBgColor("bg-blue");
      } else {
        setBgColor("bg-transparent");
      }
    });
  }

  return (
    <header className={`fixed top-0 w-full py-3 z-1000 transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${bgColor}`}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Images className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" src="/icons/logo-icodeu.svg" alt="logo i code u" />
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl font-red-hat">ICodeU</h1>
        </Link>
        <div className="flex gap-4">
          <Link
            href="/home"
            className={`font-medium duration-300 hover:text-orange hover:font-bold ${pathname === "/home" ? "text-orange" : "text-light"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium duration-300 hover:text-orange hover:font-bold ${pathname === "/about" ? "text-orange" : "text-light"}`}
          >
            About Us
          </Link>
          <Link
            href="/service"
            className={`font-medium duration-300 hover:text-orange hover:font-bold ${pathname === "/service" ? "text-orange" : "text-light"}`}
          >
            Service
          </Link>
          <Link href="/price" className={`font-medium duration-300 hover:text-orange hover:font-bold ${pricePathname}`}>
            Pricing
          </Link>
        </div>
        <Link href="/contact" className="flex items-center gap-2 font-medium duration-300 hover:font-extrabold hover:text-orange group">
          Contact Us
          <MdArrowCircleRight size={24} className="duration-300 group-hover:fill-orange" />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
