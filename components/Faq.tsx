import { Container, createStyles } from "@mantine/core";
import { FaqSimple } from "./Organisms/FaqSimple";
import { faqData } from "../assets/faq"
import { RefObject } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
    scrollMarginTop:theme.spacing.xl,
    overflowX:"hidden"
  },
}));

type Props = {
  faqRef:RefObject<HTMLDivElement>
}

const Faq = ({faqRef}:Props) => {
  const { classes } = useStyles();

  
  return (
    
    <Container ref={faqRef} size="lg" className={classes.wrapper}>
      <FaqSimple faqData={faqData} />
    </Container>
  );
};

export default Faq;
