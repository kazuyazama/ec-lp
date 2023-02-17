import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import TopScrollButton from "../components/Organisms/TopScrollButton";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { HeaderMenu } from "../components/Layout/HeaderMenu";
import { Footer } from "../components/Layout/Footer";
import { createRef, RefObject } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [scroll, scrollTo] = useWindowScroll();

  const plansRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();
  const comparisonRef = createRef<HTMLDivElement>();
  const faqRef = createRef<HTMLDivElement>();
  const featuresRef = createRef<HTMLDivElement>();

  const handleScroll = (link: RefObject<HTMLDivElement>) => {
    link.current?.scrollIntoView({ behavior: "smooth" });
  };

  const HeaderLinks = [
    {
      link: featuresRef,
      label: "特徴",
    },
    {
      link: plansRef,
      label: "料金プラン",
    },
    {
      link: comparisonRef,
      label: "他者との比較",
    },
    {
      link: faqRef,
      label: "よくある質問",
    },
    {
      link: contactRef,
      label: "お問い合わせ",
    },
  ];

  const FooterLinks = [
   
    {
      title: "Section",
      links: [
        {
          label: "HydroStoreの特徴",
          link: featuresRef,
        },
        {
          label: "料金プラン",
          link: plansRef,
        },
        {
          label: "他社比較",
          link: comparisonRef,
        },
        {
          label: "よくある質問",
          link: faqRef,
        },
        {
          label: "お問い合わせ",
          link:  contactRef,
        },
      ],
    },
  ];

  return (
    <>
      <DefaultSeo {...SEO} />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          fontFamily: "Noto Sans JP,serif",
          // headings:{fontFamily : 'Roboto'},
          colors: {
            primary: [
              "#e3f9f4",
              "#c8e6dc",
              "#a9d4c6",
              "#89c2af",
              "#69b199",
              "#50987f",
              "#3d7663",
              "#295447",
              "#153429",
              "#00130c",
            ],
            accent: [
              "#FBF6E9",
              "#F5E6C2",
              "#EED69B",
              "#E8C673",
              "#E1B64C",
              "#DAA525",
              "#AF841D",
              "#836316",
              "#57420F",
              "#2C2107",
            ],
          },
          primaryColor: "primary",
          // headings:{fontFamily:"Roboto,sans-serif" },
          breakpoints: {
            xs: 640,
            sm: 768,
            md: 1024,
            lg: 1280,
            xl: 1536,
          },
        }}
      >
        <HeaderMenu handleScroll={handleScroll} links={HeaderLinks} />
        <Component
          handleScroll={handleScroll}
          contactRef={contactRef}
          plansRef={plansRef}
          comparisonRef={comparisonRef}
          faqRef={faqRef}
          featuresRef={featuresRef}
          {...pageProps}
        />
        <Footer handleScroll={handleScroll} data={FooterLinks} />
        {scroll.y > 600 && <TopScrollButton scrollTo={scrollTo} />}
      </MantineProvider>
    </>
  );
}
