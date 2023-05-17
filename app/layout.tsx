import "@/globals.css";
import "@/background/background.css";
import Grain from "@/grain";
import Header from "@/header/";
import Footer from "@/footer/";
import localFont from "next/font/local";
import Background, { BackgroundContextProvider } from "@/background/";

const font = localFont({
  src: "fonts/alte_haas_grotesk/AlteHaasGroteskRegular.ttf",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Sara Lamberti's Photography Portfolio"
        />
        <link
          rel="icon"
          href={process.env.NEXT_PUBLIC_BASE_PATH + "/favicon.ico"}
        />
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
