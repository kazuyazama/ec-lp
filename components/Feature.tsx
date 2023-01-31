import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  Button,
  Center,
} from "@mantine/core";
import { featureData } from "../assets/Feature";
import { Icon } from "@tabler/icons-react";

interface FeatureProps {
  icon: Icon;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={20} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

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

interface FeaturesGridProps {
  data?: FeatureProps[];
}

export function FeaturesGrid({ data = featureData }: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container id="features" size="lg" className={classes.wrapper}>
      <Title className={classes.title}>Features</Title>

      <Text size="sm" mb={50} className={classes.description}>
        HydroStoreの特徴
      </Text>

      <SimpleGrid
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
      <Center>
        <Button radius="xl" px={30} mt={70} size="md">
          View More
        </Button>
      </Center>
    </Container>
  );
}
