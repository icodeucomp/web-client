import Image from "next/image";

import HeroSlice from "@/layouts/hero";
import { Desktop, Mobile } from "@/layouts/service";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <section>
        <HeroSlice
          title="Services We Provide"
          description="We understand that every business has its own distinct needs, which is why we offer a range of specialized services, including technology consulting, UI/UX design, website development, graphic design, and performance optimization."
        />
      </section>
      <section className="relative bg-black">
        <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto" />
        <div className="bg-gradient-to-b from-blue/50 to-orange/50">
          <Desktop />
          <Mobile />
        </div>
      </section>
    </div>
  );
}
