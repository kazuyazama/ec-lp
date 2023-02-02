import {
  Avatar,
  Group,
  Text,
  Container,
  Grid,
  Title,
  createStyles,
  MediaQuery,
} from "@mantine/core";
import { animated, useInView, useSpring } from "@react-spring/web";
import { IconCheck } from "@tabler/icons-react";
import { osusumeData } from "../assets/osusume";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
    scrollMarginTop: theme.spacing.xl,
  },
}));

export function Osusume() {
  const { classes, theme } = useStyles();

  const [ref, isInView] = useInView({
    rootMargin: "0% 0px",
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
    // config: {
    //   mass: 1,
    //     friction: 30,
    //     tension: 200,
    //     easing: easings.easeInExpo,
    // },
  });

  const rows = osusumeData.map((item) => (
    <animated.div key={item.name} ref={ref} style={styles}>
      <Grid  gutter="xl" align="center">
        <Grid.Col lg={8} className=" flex gap-3 items-center">
          <IconCheck color={theme.colors.accent[6]} />

          <Text size="xl">{item.email}</Text>
        </Grid.Col>
        <MediaQuery query="(max-width: 1200px)" styles={{ display: "none" }}>
          <Grid.Col lg={4} className="   ">
            <Group spacing="md">
              <Avatar size={30} src={item.avatar} radius={40} />
              <Text size="md" weight={500}>
                {item.name}
              </Text>
            </Group>
          </Grid.Col>
        </MediaQuery>
      </Grid>
    </animated.div>
  ));

  return (
    <Container id="osusume" size="lg" className={classes.wrapper}>
      <Title mb={50}>こんな方におすすめです。</Title>
      {rows}
    </Container>
  );
}
