import { Container, createStyles } from "@mantine/core";
import { FaqSimple } from "./Organisms/FaqSimple";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
  },
}));

const Faq = () => {
  const { classes } = useStyles();
  return (
    <Container size="lg" className={classes.wrapper}>
      <FaqSimple />
    </Container>
  );
};

export default Faq;
