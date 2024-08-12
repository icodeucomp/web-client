import ContactFormSlice from "../contact";

import Background from "@/components/background";
import Container from "@/components/container";
import Images from "@/components/images";

const Contact = () => {
  return (
    <Container className="pt-10 pb-32">
      <h4 className="px-8 text-2xl font-bold tracking-wide text-center sm:text-3xl md:text-5xl md:text-start">
        Get in Touch with our <strong className="text-gradient">Team</strong>.
      </h4>
      <div className="flex flex-col-reverse gap-16 px-8 py-16 lg:flex-row">
        <ContactFormSlice />
        <Background
          className="items-center justify-center flex-1 max-w-lg gap-16 px-4 text-gray-200 md:px-8 min-h-500"
          src="/images/home/talk-people.png"
        >
          <h4 className="text-3xl font-bold leading-snug text-center">“We specialize in helping our customers digitize their business”</h4>
          <div className="text-center">
            <Images src="/images/home/sandra.png" alt="sandra photo" className="w-20 h-20 mx-auto" />
            <h5 className="mt-4 text-lg font-bold">Sandra Lewis</h5>
            <p className="text-sm">Front-End Developer</p>
          </div>
        </Background>
      </div>
    </Container>
  );
};

export default Contact;
