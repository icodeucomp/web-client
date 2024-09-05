import Image from "next/image";

import HeroSlice from "@/layouts/hero";

import { Core, Purpose } from "@/layouts/about";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <section>
        <HeroSlice
          title="About Us"
          description="IcodeU committed to being your trusted technology partner, providing IT solutions that are precisely tailored to meet the unique demands of your business and drive shared growth."
        />
      </section>
      <section className="relative bg-black">
        <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto" />
        <div className="bg-gradient-to-b from-blue/50 to-orange/50">
          <Purpose />
          <Core />
        </div>
      </section>
    </div>
  );
}
