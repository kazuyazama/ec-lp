import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";

export const initialCostData = [
  {
    title: "スターター",
    price: "無料",
    description:
      "hydrogenテンプレートを使用したプランです。",
    icon: IconGauge,
  },
  {
    title: "ベーシック",
    price: "￥200,000",
    description:
      "hydrogenテンプレートをベースにカスタマイズ可能なプランです。",
    icon: IconUser,
  },
  {
    title: "プレミアム",
    price: "￥450,000",
    description:
      "テンプレートを使用せず一からwebデザインを構成していくプランです。",
    icon: IconCookie,
  },
];


export const optionData = [
  {
    position: "3D表示",
    name: "100,000円~（税抜）",
    test: "サイト全体のキーカラーを変更致します。",
  },
  {
    position: "写真撮影",
    name: "要相談(商品数による)",
    test: "プロのカメラマンを派遣し、高品質な写真を撮影します。",
  },
  {
    position: "ページ追加",
    name: "30,000円~（税抜）",
    test: "特集ページなどサイトにページを追加いたします。",
  },
  {
    position: "その他",
    name: "要相談",
    test: "その他ご希望があれば何なりとお申し付けください。できる限り対応いたします。",
  },
];
