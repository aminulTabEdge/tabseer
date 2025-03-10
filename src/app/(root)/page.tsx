import HeroBanner from "@/components/Home/HeroBanner";
import About from "@/components/About/About";
import Wings from "@/components/Wings/Wings";
import Contact from "@/components/Contact/Contact";
import TabEdge from "@/components/Home/TabEdge";
import TabStartUp from "@/components/Home/TabStartUp";
import TabLux from "@/components/Home/TabLux";
import TabseerShop from "@/components/Home/TabseerShop";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Wings />
      <TabEdge />
      <TabStartUp />
      <TabLux />
      <TabseerShop />
      <Contact />
    </>
  );
};

export default HomePage;
