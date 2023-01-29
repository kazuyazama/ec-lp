import {
  Group,
  Badge,
  Card,
  Title,
  Table,
  Text,
  Container,
} from "@mantine/core";
import { ReactNode } from "react";

interface runningData {
    runningData:ReactNode;
}

const RunningCost = ({runningData}:runningData) => {
  return (
    <>
      <Group position="center" py="xl">
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
            <tbody>{runningData}</tbody>
          </Table>
        </Card.Section>
        {/* </Group> */}
      </Card>
      </>
  );
};

export default RunningCost;
