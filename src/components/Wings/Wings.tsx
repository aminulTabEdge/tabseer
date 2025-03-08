import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "../ui/Container";
import Title from "../ui/Title";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import companies from "@/staticData/companies";

const Wings = () => {
  return (
    <Container id="wings">
      <Title title="Our Companies" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-slate-900 "
          >
            <CardHeader className="flex flex-col items-center">
              <Image
                src={company.logo}
                alt={company.name}
                width={60}
                height={50}
                className="border h-16 w-16 p-1 hover:scale-105 transition-all cursor-pointer bg-gray-100 rounded-lg"
              />
              <div className="mt-4">
                <CardTitle className="text-2xl">{company.name}</CardTitle>
                <CardDescription>{company.description}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="mt-auto w-full flex justify-center">
              <Link
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:text-white border px-4 py-2 rounded-lg dark:bg-slate-800"
              >
                <Globe />
                <span>Visit Website</span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Wings;
