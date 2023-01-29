import { Container, createStyles, SimpleGrid, Title } from "@mantine/core";
import { ComparisonTable } from "./Organisms/ComparisonTable";
import { comparisonData } from "../assets/comparison";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl ,
    paddingBottom: theme.spacing.xl * 4,
  },
}));

const Comparison = () => {

  const { classes, theme } = useStyles();

  return (
    <Container size="lg" className={classes.wrapper}>
      <SimpleGrid cols={1} spacing="xl" >
      <Title align="center"  >料金比較</Title>
      <ComparisonTable comparisonData={comparisonData} />
      </SimpleGrid>
    </Container>
  );
};

export default Comparison;
