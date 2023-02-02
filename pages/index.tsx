import Comparison from "../components/Comparison";
import Faq from "../components/Faq";
import Form from "../components/Form";
import { FeaturesGrid } from "../components/Feature";
import { Hero } from "../components/Hero";
import { Osusume } from "../components/Osusume";
import Strong from "../components/Strong";

import Plans from "../components/Plans";
import { useScrollIntoView } from "@mantine/hooks";

export default function Home() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const handleScroll = () => scrollIntoView({ alignment: "center" });

  return (
    <div className={`overflow-hidden `}>
      <Hero handleScroll={handleScroll} />

      <Osusume />

      {/* 特徴 、サービス内容*/}
      <FeaturesGrid />
      {/* 料金プラン */}
      <Plans />
      {/* 他社比較 */}
      <Comparison />
      {/* なぜ、shopifyが良いのか？または弊社の強み */}
      <Strong />
      {/* よくある質問 */}
      <Faq />
      {/* お問い合わせフォーム */}
      <Form targetRef={targetRef} />
    </div>
  );
}
