import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  MediaQuery,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { useRive } from "@rive-app/react-canvas";
import { IconCheck, IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan("xs")]: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl * 14,
    },
  },

  content: {
    maxWidth: 530,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 58,
    lineHeight: 1.2,
    letterSpacing: 0.8,
    fontWeight: 900,
    fontFamily: "Roboto",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 40,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    position: "absolute",
    top: "6rem",
    left: "50%",
    zIndex: -10,
    // absolute left-1/2 top-24 -z-10
    [theme.fn.smallerThan("xs")]: {
      top: 430,
      left: -30,
      paddingRight: theme.spacing.xs,
      paddingLeft: theme.spacing.xs,
      // height:500,
      width: "100vw",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

type Props = {
  handleScroll: () => void;
};

export function Hero({ handleScroll }: Props) {
  const { rive, RiveComponent } = useRive({
    src: "/new_file_5.riv",
    autoplay: true,
  });

  const { classes } = useStyles();

  return (
    <Container size="lg" className="overflow-visible">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={`${classes.title} lg:whitespace-nowrap  `}>
            High Performance <span className={`${classes.highlight} `}>&</span>{" "}
            Rich EC <br />
          </Title>
          <Text color="primary" mt="md" className=" text-lg lg:text-xl ">
            shopify最新FW「hydrogen」を使用した高速でリッチなECサイトを業界最安値で制作します。
          </Text>

          <List
            mt={30}
            spacing="sm"
            className="text-xl"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>初期費用0円~</b>
            </List.Item>
            <List.Item>
              <b>3Dモデル対応</b>
            </List.Item>

            <List.Item>
              <b>丸投げOK</b>
            </List.Item>
          </List>

          <Group mt={50}>
            <a href="#form">
              <Button
                radius="xl"
                size="xl"
                rightIcon={<IconArrowNarrowRight />}
                className={`${classes.control} `}
              >
                無料で相談してみる
              </Button>
            </a>
            {/* <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button> */}
          </Group>
        </div>
        <Image
          src="/undraw_shopping_app_flsj.svg"
          width={500}
          height={500}
          alt=""
          className={`${classes.image} `}
        />
        {/* エラー出てだるいから、最後に反映させる */}
        {/* <div className={`${classes.image} absolute left-1/2 top-20 -z-10 w-[700px] h-[550px]   `}>
            <RiveComponent />
          </div> */}
      </div>
    </Container>
  );
}
