import Image from "next/image";
import Container from "../ui/Container";
import Title from "../ui/Title";

const aboutTexts = [
  "Tabseer Inc. is the parent company of a diverse ecosystem of innovative brands, including TabEdge, TabStartup, TabLux, TabShop, and TabProfile. We are dedicated to revolutionizing digital solutions across various industries, offering cutting-edge technology and seamless user experiences.",
  "TabEdge, our flagship brand, specializes in international payment services, providing secure, efficient, and scalable financial solutions for businesses and individuals worldwide. From seamless cross-border transactions to advanced payment processing, we empower businesses with the tools they need to thrive in a global economy.",
  "At Tabseer Inc., we foster innovation, drive digital transformation, and create solutions that redefine the future of finance, e-commerce, and business automation.",
];

const About = () => {
  return (
    <Container className="max-w-6xl" id="about">
      <Title title="About Tabseer Inc" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
        {/* Text Section */}
        <div>
          {aboutTexts.map((text, index) => (
            <p key={index} className="mb-4 text-justify">
              {text}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/company.svg"
            height={300}
            width={300}
            alt="Credit Information"
            className="w-[400px] lg:w-[500px] "
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
