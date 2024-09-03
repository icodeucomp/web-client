"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { motion } from "framer-motion";

import Container from "@/components/container";
import Images from "@/components/images";

import useToggleState from "@/hooks/useToggleState";

import { MdArrowCircleRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import { navbarList } from "@/static";

const Header = () => {
  const pathname = usePathname();

  const [ref, navbar, toggleNavbar] = useToggleState(false);

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>("");

  const motionVariants = {
    open: { y: 0, opacity: 1, display: "flex", transition: { staggerChildren: 0.3, ease: "easeOut" } },
    closed: { y: -100, opacity: 0, display: "none", transition: { staggerChildren: 0.1, ease: "easeOut" } },
  };

  useEffect(() => {
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
          setBgColor("md:bg-blue");
        } else {
          setBgColor("md:bg-transparent");
        }
      });
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full py-3 z-1000 transition-all duration-500 bg-blue ${isVisible ? "translate-y-0" : "-translate-y-full"} ${bgColor}`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Images className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" src="/icons/logo-icodeu.svg" alt="logo i code u" />
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl font-red-hat">ICodeU</h1>
        </Link>
        <nav className="hidden gap-4 md:flex">
          {navbarList.slice(0, 4).map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`font-medium duration-300 hover:text-orange hover:font-bold ${item.path.includes(pathname) ? "text-orange" : "text-light"}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <motion.nav
          initial={false}
          animate={navbar ? "open" : "closed"}
          variants={motionVariants}
          className={`absolute left-0 flex-col items-center w-full gap-4 px-8 py-8 top-10 md:hidden text-nowrap bg-blue ${bgColor}`}
        >
          {navbarList.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`font-medium duration-300 hover:text-orange hover:font-bold ${item.path.includes(pathname) ? "text-orange" : "text-light"}`}
            >
              {item.title}
            </Link>
          ))}
        </motion.nav>
        <Link href="/contact" className="items-center hidden gap-2 font-medium duration-300 md:flex hover:font-extrabold hover:text-orange group">
          Contact Us
          <MdArrowCircleRight size={24} className="duration-300 group-hover:fill-orange" />
        </Link>
        <div className="block md:hidden">
          <button onClick={toggleNavbar}>
            {navbar ? <IoClose size={32} className="fill-orange" /> : <IoMdMenu size={32} className="fill-orange" />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
