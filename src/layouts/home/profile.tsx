import Container from "@/components/container";
import Images from "@/components/images";
import { serve } from "@/static";

const Profile = () => {
  return (
    <Container>
      <div className="flex items-center py-12">
        <p className="font-extrabold tracking-wide text-blue me-2">01</p>
        <p className="font-extrabold tracking-wide text-blue me-4">|</p>
        <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm me-4">Who We Are</p>
        <i className="flex-grow border-t border-gray-400" />
      </div>
      <div className="flex">
        <div className="mt-4 space-y-8 text-justify">
          <h4 className="text-3xl font-medium leading-normal">
            We are a group of experts looking to help companies leverage technology to do more than they had ever thought possible.
          </h4>
          <p className="text-sm tracking-wide sm:text-lg">
            We do this through a number of services to provide comprehensive solutions for your business. Scroll down to read about what we can do for
            you.
          </p>
        </div>
        <div className="px-8">
          <Images src="/images/home/work-people.png" alt="people working" className="w-96 h-80" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Images src="/images/home/meet-people.png" alt="people working" className="min-w-600 min-h-400" />
        <div className="space-y-8">
          <menu className="space-y-4 text-sm sm:text-lg">
            {serve.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-4">
                <Images src={item.pathImg} alt={item.description} className="w-6 h-6" />
                <p className="flex-grow font-semibold text-light-yellow">{item.description}</p>
              </li>
            ))}
          </menu>
          <div className="flex items-center gap-4">
            <menu className="text-sm sm:text-lg">
              <li className="font-bold text-light-red">Asya Ismatullah Faris</li>
              <li className="font-light">iCodeU Founder</li>
            </menu>
            <Images src="/images/home/signature.png" alt="signature asya" className="w-60 h-14" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
