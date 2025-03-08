import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Title from "../ui/Title";
import Container from "../ui/Container";

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <Title title="Contact Us" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 container mx-auto">
        <div className="flex-1 w-full max-w-lg">
          <ContactInfo />
        </div>
        <div className="flex-1 w-full max-w-lg">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
