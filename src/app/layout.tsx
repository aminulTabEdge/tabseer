import "./globals.css";
import ThemeProvider from "./../providers/ThemeProvider";
import generateSEO from "@/lib/genarateSEO";

export const metadata = generateSEO({
  title: "Tabseer Inc",
  description:
    "Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, Firebase, TypeScript, MongoDB, and scalable web applications. Currently working at TabEdge, an American payment solution company, delivering high-performance solutions.",
  keywords:
    "Software Developer, MERN Stack Developer, Next.js Developer, React Developer, MongoDB Expert, Firebase Expert, Mongoose, TypeScript Developer, Full-Stack Developer, Web Development, JavaScript Developer, Frontend Engineer, Backend Developer, API Development, Cloud Computing, Payment Solutions, E-commerce Development, TabEdge, TabEdge Developer, Web Application Designer, Graphic Designer, UI/UX Developer, SEO Specialist, Scalable Web Apps, Progressive Web Apps, Startup Tech, SaaS Developer, DevOps, Software Engineer, Aminul118, Hyper118",
  url: "https://aminul.tech",
});

export type ChildrenType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
