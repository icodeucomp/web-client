import Image from "next/image";

import { Detail, Environment } from "@/layouts/price";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <section className="relative bg-black">
        <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto" />
        <div className="bg-gradient-to-b from-blue/50 to-orange/50">
          <Detail />
          <Environment id={params.id} />
        </div>
      </section>
    </>
  );
}
