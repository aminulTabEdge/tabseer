import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react"; // Import Lucid Icons
import Link from "next/link";
import CopyrightText from "./CopyrightText";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left section: Company Logo */}
          <div className="flex items-center gap-4 mb-6 sm:mb-0">
            <Image
              src="/logo-white.svg"
              alt="Company Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Middle section: Navigation Links */}
          <div className="flex flex-wrap gap-6 mb-6 sm:mb-0">
            <Link href="/#about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/#wings" className="text-gray-300 hover:text-white">
              Wings
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>

          {/* Right section: Social Media Links */}
          <div className="flex items-center gap-6 mb-6 sm:mb-0">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-300 hover:text-white text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-gray-300 hover:text-white text-xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom section: Copyright */}
      <div className="text-center  border-t mt-8 max-w-6xl mx-auto border-white/20">
        <CopyrightText />
      </div>
    </footer>
  );
};

export default Footer;
