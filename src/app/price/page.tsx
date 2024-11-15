import Image from "next/image";

import { Business, Contact, Stack } from "@/layouts/price";

export default function page() {
  return (
    <section className="relative bg-black overflow-x-hidden">
      <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto" />
      <div className="bg-gradient-to-b from-blue/50 to-orange/50">
        <Business />
        <Stack />
        <Contact />
      </div>
    </section>
  );
}
