import { Container, Title, Accordion, createStyles, Text } from "@mantine/core";
import { animated, useInView, useSpring } from "@react-spring/web";
import { IconLetterQ } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
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

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

interface props {
  faqData: {
    value: string;
    question: string;
    answer: string;
  }[];
}

export function FaqSimple({ faqData }: props) {
  const { classes } = useStyles();

  const [ref, isInView] = useInView({
    rootMargin: "0% 0px",
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
  });
  return (
    <>
      <Title className={classes.title}>FAQ</Title>
      <Text size="sm" mb={50} className={classes.description}>
        よくある質問
      </Text>

      <animated.div ref={ref} style={styles}>
        <Accordion variant="separated">
          {faqData.map((faq) => (
            <Accordion.Item
              key={faq.value}
              className={classes.item}
              value={`${faq.value}`}
            >
              <Accordion.Control icon={<IconLetterQ />}>
                {faq.question}
              </Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </animated.div>
    </>
  );
}
