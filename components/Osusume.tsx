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
} from "@mantine/core";
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from "@tabler/icons";
import {IconCheck} from "@tabler/icons-react"

interface UsersStackProps {
  data: { avatar: string; name: string; job: string; email: string }[];
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl ,
    paddingBottom: theme.spacing.xl * 4,
  },
}));

export function Osusume({ data }: UsersStackProps) {

  const { classes, theme } = useStyles();


  const rows = data.map((item) => (
    <Grid key={item.name} gutter="xl" align="center"  >
      <Grid.Col lg={8} className=" flex gap-3 ">
        <IconCheck />
        <Text className="lg:text-lg ">{item.email}</Text>
      </Grid.Col>
      <Grid.Col lg={4} className="   ">
        <Group spacing="md">
          <Avatar size={50} src={item.avatar} radius={40} />
          <Text size="md" weight={500}>
            {item.name}
          </Text>
        </Group>
      </Grid.Col>
    </Grid>
  ));

  return (
    <Container size="lg"  className={ classes.wrapper} >
      <Title mb={40}>こんな方におすすめです。</Title>
      {rows}
    </Container>
  );
}
