import Container from "@/components/container";
import { IoIosArrowDown } from "react-icons/io";

const Description = () => {
  return (
    <Container className="pb-16">
      <hr className="mb-8" />
      <h4 className="mb-4 text-3xl font-bold tracking-wide text-gray-300">Product Description</h4>
      <p className="text-justify text-gray-300 line-clamp-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iure tempora recusandae, accusamus iste accusantium eius libero
        repudiandae consequatur hic mollitia atque in, ut vitae doloremque expedita similique. Ullam sapiente asperiores, neque eius aut magnam unde
        ducimus architecto tempora facilis iusto maiores repellat, exercitationem similique voluptates tempore, eos odit cum.
      </p>
      <div className="flex justify-center mt-4">
        <p className="font-light text-center text-gray-300 w-max group">
          Click to read more
          <IoIosArrowDown
            size={24}
            className="p-1 mx-auto mt-1 border rounded-full shadow-md border-light fill-light group-hover:fill-orange group-hover:bg-light"
          />
        </p>
      </div>
    </Container>
  );
};

export default Description;
