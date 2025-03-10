import Link from "next/link";
import Container from "../ui/Container";
import ImageComponent from "../ui/ImageComponent";
import Title from "../ui/Title";
import { Button } from "../ui/button";

const aboutTabStartUp = [
  "At TabStartUp, our mission is to liberate financial transactions from borders and restrictions. We strive to empower individuals and businesses worldwide by providing a seamless, secure, and limitless cross-border transaction experience. Through innovation, compliance, and user-centric solutions, we aim to be the catalyst for a more connected and accessible global financial landscape, enabling our users to transact without limits and experience true financial freedom.",
];

const TabseerShop = () => {
  return (
    <Container className="max-w-6xl">
      <Title title="Tabseer Shop" />
      <div className="grid lg:grid-cols-2 items-center justify-between">
        <ImageComponent
          src="/assets/images/tabseer-shop.svg"
          alt="TabStartUp Image"
        />
        <div>
          {aboutTabStartUp.map((about, i) => (
            <p key={i} className="text-justify">
              {about}
            </p>
          ))}
          <Button className="mt-4">
            <Link href="https://TabStartUp.com">Website</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default TabseerShop;
