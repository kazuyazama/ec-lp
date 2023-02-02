// import { Grid, Skeleton, Container, Title, SimpleGrid } from "@mantine/core";

// const child = <Skeleton height={140} radius="md" animate={false} />;

// export function Osusume() {
//   return (
//     <Container  size="lg" my="md">
//       <Title mb={20}>こんな方にオススメです</Title>
//       <SimpleGrid cols={1} spacing={0} >
//         <h3>他社と差別化をしたサイトを作りたい</h3>
//         <h3>読み込みが早いECサイトを制作したい</h3>
//         <h3>ネットショップでの集客をアップしたい。</h3>
//         <h3>自社のオリジナリティをサイトでしっかり表現したい</h3>
//         <h3>商品を3Dで見せたい</h3>
//       </SimpleGrid>
//     </Container>
//   );
// }

import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  ScrollArea,
  Container,
  Grid,
  Title,
  createStyles,
  MediaQuery,
} from "@mantine/core";
import {
  animated,
  easings,
  useChain,
  useInView,
  useSpring,
  useSpringRef,
  useSprings,
  useTrail,
} from "@react-spring/web";
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from "@tabler/icons";
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
    <animated.div ref={ref} style={styles}>
      <Grid key={item.name} gutter="xl" align="center">
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
