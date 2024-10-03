import Image from "next/image";

import { Description, Price, Table } from "@/layouts/price";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-black">
        <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto" />
        <div className="bg-gradient-to-b from-blue/50 to-orange/50">
          <Price id={params.id} />
          <Description id={params.id} />
          {/* <Table id={params.id} /> */}
        </div>
      </section>
    </div>
  );
}
