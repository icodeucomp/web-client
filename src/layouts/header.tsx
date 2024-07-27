import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark/80 lg:bg-dark/60 lg:py-4 lg:px-16 text-light z-1000">
      <div className="relative flex items-center justify-between w-full h-20 gap-4 px-8 pb-4 lg:h-full lg:px-0">
        <Link href="/">
          <Image src="/images/logo-image.webp" alt="Mitra Sama Sejahtera Logo" width={150} height={150} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
