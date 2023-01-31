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
import { InitialCost } from "./Organisms/InitialCost";
import { optionData } from "../assets/initialCost";
import { runningCostData } from "../assets/runningCost";
import { initialCostData } from "../assets/initialCost";
import RunningCost from "./Organisms/RunningCost";



const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
    scrollMarginTop:theme.spacing.xl
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

    [theme.fn.smallerThan("sm")]: {},
  },
}));


const Plans = () => {
  const { classes } = useStyles();
  const runningData = runningCostData.map((element) => (
    <tr key={element.package}>
      <td>{element.package}</td>
      <td>{element.support}</td>
    </tr>
  ));
  const options = optionData.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.test}</td>
    </tr>
  ));
  return (
    <Container id="plans" size="lg" className={classes.wrapper}>
        <Title className={classes.title}>Plans</Title>
        <Text size="sm" mb={50} className={classes.description}>
        料金プラン
      </Text>
      <SimpleGrid cols={1} spacing="xl">

        <InitialCost initialCostData={initialCostData} />

        <Card w="100%" radius="md" withBorder>
          {/* <Group  position="center"> */}

          <Card.Section>
            <Text align="center" size="xl" mt="md">
              追加オプション
            </Text>
            <Divider my="lg" w="100%" />

            <Table mb={20}>
              <tbody>{options}</tbody>
            </Table>
          </Card.Section>
          {/* </Group> */}
        </Card>

        <RunningCost runningData={runningData} />
      </SimpleGrid>
    </Container>
  );
};

export default Plans;
