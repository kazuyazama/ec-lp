import {
  Badge,
  Box,
  Card,
  Center,
  Container,
  createStyles,
  Divider,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { Plan } from "./Plan";

const Price = () => {
  const standard = [
    { position: "基本設定", name: "メール・チャットサポート" },
    { position: "サイトデザイン", name: "ビデオ通話サポート" },
    { position: "アクセス解析設定", name: "主要広告運用サポート" },
    { position: "", name: "商品登録代行（月20点まで）" },
  ];
  const option = [
    {
      position: "キーカラー変更",
      name: "11,000円（税込）",
      test: "サイト全体のキーカラーを変更致します。",
    },
    {
      position: "キーカラー変更",
      name: "11,000円（税込）",
      test: "サイト全体のキーカラーを変更致します。",
    },
    {
      position: "キーカラー変更",
      name: "11,000円（税込）",
      test: "サイト全体のキーカラーを変更致します。",
    },
    {
      position: "キーカラー変更",
      name: "11,000円（税込）",
      test: "サイト全体のキーカラーを変更致します。",
    },
  ];

  const standards = standard.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
    </tr>
  ));
  const options = option.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.test}</td>
    </tr>
  ));
  return (
    <Container size="lg">
      <SimpleGrid cols={1}>
        <Title align="center">料金プラン</Title>
        <Plan />

        <Card w="100%" radius="md" withBorder>
          {/* <Group  position="center"> */}

          <Card.Section>
            <Text align="center" size="xl" mt="md">
              追加オプション
            </Text>
            <Divider my="lg" w="100%" />

            <Table>
              <tbody>{options}</tbody>
            </Table>
          </Card.Section>
          {/* </Group> */}
        </Card>
        <Group position="center">
          <Badge size="xl">ranningcost</Badge>
        </Group>

        <Card w="100%" radius="md" withBorder>
          {/* <Group  position="center"> */}

          <Card.Section>
            <Title align="center" mt="md">
              ¥22,000 / 月
            </Title>

            <Text color="dimmed" align="center" mt="md">
              下記の項目はすべてランニングコストに含まれています。
            </Text>

            <Table w="90%" mx="auto" withColumnBorders={true}>
              <thead>
                <tr>
                  <th className="text-center border-b-2">
                    Shopify構築パッケージ
                  </th>
                  <th>Shopify運用サポート</th>
                </tr>
              </thead>
              <tbody>{standards}</tbody>
            </Table>
          </Card.Section>
          {/* </Group> */}
        </Card>
      </SimpleGrid>
    </Container>
  );
};

export default Price;
