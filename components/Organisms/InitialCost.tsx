import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Flex,
} from "@mantine/core";
import { TablerIconsProps } from "@tabler/icons-react";

interface initialData {
  initialCostData: {
    title: string;
    price: string;
    description: string;
    icon: (props: TablerIconsProps) => JSX.Element;
  }[];
}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 28,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function InitialCost({ initialCostData }: initialData) {
  const { classes, theme } = useStyles();
  const features = initialCostData.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <Flex align="center" gap="md">
        <feature.icon size={50} color={theme.fn.primaryColor()} />
        <Text>{feature.title}</Text>
      </Flex>
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.price}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <>
      <Group position="center">
        <Badge size="xl">initilalcost</Badge>
      </Group>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        次の３つからお選びいただけます。
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </>
  );
}