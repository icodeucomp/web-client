import Container from "@/components/container";
import Images from "@/components/images";
import { blog } from "@/static";
import formatDate from "@/utils/formatDate";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <Container className="pt-8 pb-16">
      <div className="flex items-center pb-8">
        <p className="font-extrabold tracking-wide text-blue me-2">05</p>
        <p className="font-extrabold tracking-wide text-blue me-4">|</p>
        <p className="flex-shrink text-xs font-bold tracking-wide uppercase text-dark-blue me-4 md:text-sm">Blogs</p>
        <i className="flex-grow border-t border-dark-blue" />
      </div>
      <div className="space-y-10">
        <h4>Read our articles & news</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quaerat quia culpa itaque cupiditate reiciendis vel nihil, voluptatum
          molestiae. Itaque hic, debitis maiores sunt aspernatur dolores. Deleniti ex obcaecati, voluptate quis quas a molestias quam minima, delectus
          commodi autem numquam alias. Quisquam, architecto facilis. Porro laudantium harum vel magni numquam!
        </p>
        <menu className="flex flex-wrap justify-center gap-8">
          {blog.map((item, index) => (
            <article key={index} className="max-w-xs space-y-2 overflow-hidden min-w-72 rounded-3xl bg-light">
              <div className="relative">
                <Images src={item.pathImg} alt={item.title} className="h-40 w-80" cover />
                <span className="absolute bottom-0 left-0 p-2 text-sm rounded-se-md bg-light-red">{item.topic}</span>
              </div>
              <div className="px-4 pt-4 pb-8 space-y-4">
                <p className="text-sm tracking-wide text-gray-400">{formatDate(item?.date)}</p>
                <h5 className="text-xl font-bold leading-relaxed text-lemon-yellow">{item.title}</h5>
                <p className="text-sm leading-relaxed text-justify text-gray-400 line-clamp-4">{item.description}</p>
              </div>
            </article>
          ))}
        </menu>
        <Link href="/" className="flex items-center justify-center w-full gap-2 pb-8 text-sm font-medium hover:underline">
          See All Posts <IoIosArrowForward size={24} className="p-1 rounded-full bg-light fill-blue" />
        </Link>
      </div>
    </Container>
  );
};

export default Blog;
