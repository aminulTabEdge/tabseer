import Link from "next/link";
import Container from "../ui/Container";
import ImageComponent from "../ui/ImageComponent";
import Title from "../ui/Title";
import { Button } from "../ui/button";

const aboutTabedge = [
  "TabEdge is a fintech platform transforming cross-border transactions for freelancers, small businesses, and digital entrepreneurs. Offering U.S. bank accounts (no passport required), API integration, branded transactions, and secure global payments, TabEdge eliminates financial barriers. With a focus on innovation, compliance, and user empowerment, we deliver seamless, limitless banking solutions. Experience true financial freedom with TabEdge.",
];

const TabEdge = () => {
  return (
    <Container className="max-w-6xl">
      <Title title="TabEdge" />
      <div className="grid lg:grid-cols-2 items-center justify-between">
        <div>
          {aboutTabedge.map((about, i) => (
            <p key={i} className="text-justify">
              {about}
            </p>
          ))}
          <Button className="mt-4">
            <Link href="https://tabedge.com">Website</Link>
          </Button>
        </div>
        <ImageComponent
          src="/assets/images/payment-link.svg"
          alt="Tabedge Image"
        />
      </div>
    </Container>
  );
};

export default TabEdge;
