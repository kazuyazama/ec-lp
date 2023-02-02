import {
  Group,
  Badge,
  Card,
  Title,
  Table,
  Text,
  Container,
} from "@mantine/core";
import { animated, useInView, useSpring } from "@react-spring/web";
import { ReactNode } from "react";

interface runningData {
    runningData:ReactNode;
}

const RunningCost = ({runningData}:runningData) => {

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
        {/* <Group  position="center"> */}

        <Card.Section>
          <Title align="center" mt="xl" className=" font-Roboto after:content-['/月'] after:tracking-widest after:ml-2 after:text-[20px] ">
            ¥22,000 
          </Title>

          <Text color="dimmed" align="center" mt="md">
            下記の項目はすべてランニングコストに含まれています。
          </Text>

          <Table w="90%" mx="auto" withColumnBorders={true} my={20}>
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

          <Title align="center" pb="lg" px="md" size="h3">+ 15,000円 /月で全てこちらが代行（丸投げ）も可能</Title>
        </Card.Section>
        {/* </Group> */}
      </Card>
      </animated.div>
  );
};

export default RunningCost;
