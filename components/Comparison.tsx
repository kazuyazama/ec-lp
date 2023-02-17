import {
  Container,
  createStyles,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { ComparisonTable } from "./Organisms/ComparisonTable";
import { comparisonData } from "../assets/comparison";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
    scrollMargin: theme.spacing.xl,
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

const Comparison = ({comparisonRef}) => {
  const { classes } = useStyles();

  return (
    <Container ref={comparisonRef} size="lg" className={classes.wrapper}>
      <Title className={classes.title}>Comparison</Title>
      <Text size="sm" mb={50} className={classes.description}>
        他社比較
      </Text>
      <SimpleGrid cols={1} spacing="xl">
        <ComparisonTable comparisonData={comparisonData} />
      </SimpleGrid>
    </Container>
  );
};

export default Comparison;
