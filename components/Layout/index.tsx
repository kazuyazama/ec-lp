import { ReactElement } from "react";
import {Footer} from "./Footer";
import { HeaderMenu } from "./HeaderMenu";

type LayoutProps = Required<{
    readonly children: ReactElement;
  }>;

const Layout = ({children}:LayoutProps) => {

    const HeaderLinks = [
        {
          link: "/about",
          label: "Features",
        },
        {
          link: "/pricing",
          label: "Pricing",
        },
        {
          link: "/learn",
          label: "Learn",
        },
        {
          link: "/community",
          label: "Community",
        },
      ];



      const FooterLinks = [
        {
          "title": "About",
          "links": [
            {
              "label": "Features",
              "link": "#"
            },
            {
              "label": "Pricing",
              "link": "#"
            },
            {
              "label": "Support",
              "link": "#"
            },
            {
              "label": "Forums",
              "link": "#"
            }
          ]
        },
        {
          "title": "Project",
          "links": [
            {
              "label": "Contribute",
              "link": "#"
            },
            {
              "label": "Media assets",
              "link": "#"
            },
            {
              "label": "Changelog",
              "link": "#"
            },
            {
              "label": "Releases",
              "link": "#"
            }
          ]
        },
        {
          "title": "Community",
          "links": [
            {
              "label": "Join Discord",
              "link": "#"
            },
            {
              "label": "Follow on Twitter",
              "link": "#"
            },
            {
              "label": "Email newsletter",
              "link": "#"
            },
            {
              "label": "GitHub discussions",
              "link": "#"
            }
          ]
        }
      ]



  return (
    <>
      <HeaderMenu links={HeaderLinks} />
      <main>{children}</main>
      <Footer data={FooterLinks} />
    </>
  );
};

export default Layout;
