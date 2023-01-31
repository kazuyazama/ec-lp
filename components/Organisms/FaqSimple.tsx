import { Container, Title, Accordion, createStyles, Text } from "@mantine/core";
import { IconLetterQ, } from "@tabler/icons-react";

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
  }[]
}

export function FaqSimple({ faqData }: props) {

  const { classes } = useStyles();
  return (
    <div>
      <Title className={classes.title}>FAQ</Title>
      <Text size="sm" mb={50} className={classes.description}>
        よくある質問
      </Text>

      <Accordion variant="separated">
        {faqData.map((faq) => (
          <Accordion.Item
            key={faq.value}
            className={classes.item}
            value={`${faq.value}`}
          >
            <Accordion.Control icon={<IconLetterQ />}>{faq.question}</Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
