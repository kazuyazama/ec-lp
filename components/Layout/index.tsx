import { ReactElement } from "react";
import { Footer } from "./Footer";
import { HeaderMenu } from "./HeaderMenu";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => {
  
  const HeaderLinks = [
    {
      link: "#features",
      label: "特徴",
    },
    {
      link: "#plans",
      label: "料金プラン",
    },
    {
      link: "#comparison",
      label: "他者との比較",
    },
    {
      link: "#faq",
      label: "よくある質問",
    },
    {
      link: "#form",
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
      <HeaderMenu links={HeaderLinks} />
      <main>{children}</main>
      <Footer data={FooterLinks} />
    </>
  );
};

export default Layout;
