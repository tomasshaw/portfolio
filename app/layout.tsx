import "./globals.css";
import Grain from "./grain";
import Header from "./header";
import Background from "./background";
import Footer from "./footer";
import { BackgroundContextProvider } from "./backgroundContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Sara's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <BackgroundContextProvider>
          {children}
          <Background />
        </BackgroundContextProvider>
        <Grain />
        <Footer />
      </body>
    </html>
  );
}
