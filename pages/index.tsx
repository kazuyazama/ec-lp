import Comparison from "../components/Comparison";
import Faq from "../components/Faq";
import Form from "../components/Form";
import { FeaturesGrid } from "../components/Feature";
import { Hero } from "../components/Hero";
import { Osusume } from "../components/Osusume";
import Strong from "../components/Strong";

import Plans from "../components/Plans";
import { RefObject } from "react";

type Props = {
  handleScroll: (link: RefObject<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
  comparisonRef: RefObject<HTMLDivElement>;
  plansRef: RefObject<HTMLDivElement>;
  faqRef: RefObject<HTMLDivElement>;
  featuresRef: RefObject<HTMLDivElement>;
};

export default function Home({
  handleScroll,
  contactRef,
  comparisonRef,
  plansRef,
  faqRef,
  featuresRef,
}: Props) {
  return (
    <main className={`overflow-x-hidden `}>
      <Hero contactRef={contactRef} handleScroll={handleScroll} />

      <Osusume />

      {/* 特徴 、サービス内容*/}
      <FeaturesGrid featuresRef={featuresRef} />
      {/* 料金プラン */}
      <Plans plansRef={plansRef} />
      {/* 他社比較 */}
      <Comparison comparisonRef={comparisonRef} />
      {/* なぜ、shopifyが良いのか？または弊社の強み */}
      <Strong />
      {/* よくある質問 */}
      <Faq faqRef={faqRef} />
      {/* お問い合わせフォーム */}
      <Form contactRef={contactRef} />
    </main>
  );
}
