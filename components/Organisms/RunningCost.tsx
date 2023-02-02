import { Group, Badge, Card, Title, Text, Grid, List } from "@mantine/core";
import { animated, useInView, useSpring } from "@react-spring/web";

interface runningData {
  packages: string[];
  supports: string[];
}

const RunningCost = ({ packages, supports }: runningData) => {
  const [ref, isInView] = useInView({
    rootMargin: "0% 0px",
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
  });

  return (
    <animated.div ref={ref} style={styles}>
      <Group position="center" py="lg">
        <Badge size="xl">ranningcost</Badge>
      </Group>

      <Card w="100%" radius="md" withBorder>
        <Card.Section>
          <Title
            align="center"
            mt="xl"
            className=" font-Roboto after:content-['/月'] after:tracking-widest after:ml-2 after:text-[20px] "
          >
            ¥15,000
          </Title>
          <Text align="center" color="dimmed">
            shopify使用料が別途かかります
          </Text>

          <Text align="center" mt="md" px="md">
            下記の項目はすべてランニングコストに含まれています。
          </Text>

          <Grid mx="xl" my={20} justify="center">
            <Grid.Col lg={4} sm={12}>
              <Text size="md" mb="md" weight="bold">
                shopify構築パッケージ
              </Text>
              <List>
                {packages?.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </Grid.Col>
            <Grid.Col lg={4} sm={12}>
              <Text size="md" mb="md" weight="bold">
                運用サポート
              </Text>
              <List>
                {supports?.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </Grid.Col>
          </Grid>

          {/* <Table w="100%" mx="auto" withColumnBorders={true} my={20}>
            <thead>
              <tr>
                <th className="text-center border-b-2">
                  Shopify構築パッケージ
                </th>
                <th>Shopify運用サポート</th>
              </tr>
            </thead>
            <tbody>{runningData}</tbody>
          </Table> */}

          <Title align="center" pb="lg" px="md" size="h3">
            + 15,000円 /月で全てこちらが代行（丸投げ）も可能
          </Title>
        </Card.Section>
      </Card>
    </animated.div>
  );
};

export default RunningCost;
