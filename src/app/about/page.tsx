import Image from "next/image";

import HeroSlice from "@/layouts/hero";

import { Core, Purpose } from "@/layouts/about";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <section>
        <HeroSlice
          title="About Us"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio eligendi dignissimos assumenda quae repellendus, reiciendis cum sunt consequuntur fuga unde, commodi necessitatibus ea sint suscipit. Amet eos iste consectetur!"
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
