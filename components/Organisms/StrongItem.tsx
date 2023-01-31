import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  Container,
} from "@mantine/core";
import { TablerIconsProps } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.primary[1],
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  title: {
    fontFamily: `Greycliff CF,${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
  description:{
    marginBottom:theme.spacing.md
  }
}));

interface props {
  strongData: {
    icon: (props: TablerIconsProps) => JSX.Element;
    title: string;
    description: string;
  }[];
}

export function StrongItem({ strongData }: props) {
  const { classes } = useStyles();

  const items = strongData.map((strong) => (
    <div key={strong.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "primary.4", to: "cyan" }}
      >
        <strong.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {strong.title}
      </Text>
      <Text color="dimmed" size="sm">
        {strong.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid gutter={80} className={classes.inner}>
          <Col span={12} md={5}>
            <Title className={classes.title}>
              Why shopify?
            </Title>
            <Text className={classes.description}>なぜShopifyが良いのか?</Text>
            <Text color="dimmed">
              Shopifyは世界シェアNo.1、175ヵ国の導入されているECサイト構築システムです。
              全世界で60万店舗が利用しており、世界ではバドワイザー、テスラモーターズ、ペプシ、カイリーコスメティクス等名だたるブランド・企業もShopifyを採用しております。
              この様に、世界シェアNo.1の豊富な情報量と経験値が積まれているため他社に比べて絶対的な信頼性があります。
            </Text>

      
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid
              cols={2}
              spacing={30}
              breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
