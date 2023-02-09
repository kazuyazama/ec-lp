import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";
import { useWindowScroll } from "@mantine/hooks";

import TopScrollButton from "../components/Organisms/TopScrollButton";
import { Provider } from "jotai";
import { DefaultSeo } from "next-seo";
import  SEO from "../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  const [scroll, scrollTo] = useWindowScroll();
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
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
        {scroll.y > 600 && <TopScrollButton scrollTo={scrollTo} />}
      </MantineProvider>
    </>
  );
}
