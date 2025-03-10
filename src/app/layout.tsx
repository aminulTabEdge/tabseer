import "./globals.css";
import ThemeProvider from "./../providers/ThemeProvider";
import generateSEO from "@/lib/genarateSEO";

export const metadata = generateSEO({
  title: "Tabseer Inc",
  description:
    "Tabseer Inc is the parent company of TabEdge, Tab Startup, TabLux, Tabseershop, and TabProfile, leading the way in innovative technology and high-performance solutions across various sectors.",
  keywords:
    "Tabseer Inc, TabEdge, Tab Startup, TabLux, Tabseershop, TabProfile, Corporate Tech Solutions, Innovative Technology, Payment Solutions, E-commerce Development, SaaS, Startup Tech, Tech Solutions, Web Development",
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
