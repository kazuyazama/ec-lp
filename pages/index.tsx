import Comparison from "../components/Comparison";
import Faq from "../components/Faq";
import Form from "../components/Form";
import { Feature, FeaturesGrid } from "../components/Feature";
import { Hero } from "../components/Hero";
import { Osusume } from "../components/Osusume";
import Price from "../components/Plans";
import Strong from "../components/Strong";
import { osusumeData } from "../assets/osusume";
import { Container, createStyles, Group, SimpleGrid } from "@mantine/core";
import Plans from "../components/Plans";



export default function Home() {
  const title = "Features";
  const description = "ホームページストアの特徴";

  return (
    <div className={`overflow-hidden `}>
      <Hero />

      <Osusume data={osusumeData} />
      {/* 特徴 、サービス内容（ホームページストアのパクる） */}
      <FeaturesGrid title={title} description={description} />
      {/* 料金プラン */}
      <Plans />
      {/* 他社比較 */}
      <Comparison />
      {/* なぜ、shopifyが良いのか？または弊社の強み */}
      <Strong />
      {/* よくある質問 */}
      <Faq />
      {/* お問い合わせフォーム */}
      <Form />
    </div>
  );
}
