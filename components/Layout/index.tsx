import { createRef, RefObject } from "react";
import Home from "../../pages";
import { Footer } from "./Footer";
import { HeaderMenu } from "./HeaderMenu";

const Layout = () => {
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
      title: "Topics",
      links: [
        {
          label: "Target",
          link: "#osusume",
        },
        {
          label: "Why shopify?",
          link: "#strong",
        },
        {
          label: "Contact",
          link: "#form",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          label: "HydroStoreの特徴",
          link: "#features",
        },
        {
          label: "料金プラン",
          link: "#plans",
        },
        {
          label: "他社比較",
          link: "#comparison",
        },
        {
          label: "よくある質問",
          link: "#faq",
        },
      ],
    },
    {
      title: "Information",
      links: [
        {
          label: "運営会社",
          link: "https://www.restarts.co.jp/",
        },
      ],
    },
  ];

  return (
    <>
      <HeaderMenu handleScroll={handleScroll} links={HeaderLinks} />
      <Home
        handleScroll={handleScroll}
        contactRef={contactRef}
        plansRef={plansRef}
        comparisonRef={comparisonRef}
        faqRef={faqRef}
        featuresRef={featuresRef}
      />
      <Footer data={FooterLinks} />
    </>
  );
};

export default Layout;
