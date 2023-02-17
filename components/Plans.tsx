import {
  Card,
  Container,
  createStyles,
  Divider,
  ScrollArea,
  SimpleGrid,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { InitialCost } from "./Organisms/InitialCost";
import { optionData } from "../assets/initialCost";
import { packages } from "../assets/runningCost";
import { supports } from "../assets/runningCost";
import { initialCostData } from "../assets/initialCost";
import RunningCost from "./Organisms/RunningCost";
import { animated, useInView, useSpring } from "@react-spring/web";
import { RefObject } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
    scrollMarginTop: theme.spacing.xl,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },
  },

  description: {
    textAlign: "center",
  },
}));

type Props = {
  plansRef:RefObject<HTMLDivElement>
}

export const Plans = ({plansRef}:Props) => {
  const { classes } = useStyles();

  const [ref, isInView] = useInView({
    rootMargin: "0% 0px",
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
  });

  // const runningData = testData.map((element) => (
  //   <div key={element.package}>
  //     <div>{element.package}</div>
  //     <div>{element.support}</div>
  //   </div>
  // ));
  const options = optionData.map((element) => (
    <tr key={element.title}>
      <td>{element.title}</td>
      <td>{element.price}</td>
      <td>{element.description}</td>
    </tr>
  ));
  return (
    <Container ref={plansRef}  size="lg" className={classes.wrapper}>
      <Title className={classes.title}>Plans</Title>
      <Text size="sm" mb={50} className={classes.description}>
        料金プラン
      </Text>
      <SimpleGrid cols={1} spacing="xl">
        <InitialCost initialCostData={initialCostData} />

        <animated.div ref={ref} style={styles}>
          <Card w="100%" radius="md" withBorder>
            <Card.Section>
              <Text align="center" size="xl" mt="md">
                追加オプション
              </Text>
              <Divider my="lg" w="100%" />

              <ScrollArea>
                <Table sx={{ minWidth: 800 }} mb={20}>
                  <tbody>{options}</tbody>
                </Table>
              </ScrollArea>
            </Card.Section>
          </Card>
        </animated.div>

        <RunningCost packages={packages} supports={supports} />
      </SimpleGrid>
    </Container>
  );
};

export default Plans;
