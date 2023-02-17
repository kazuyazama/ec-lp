import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { useRive } from "@rive-app/react-canvas";
import { IconCheck, IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { RefObject } from "react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan("xs")]: {
      paddingTop: 0,
      paddingBottom: theme.spacing.xl * 12,
      
    },
  },

  content: {
    maxWidth: 530,
    marginRight: theme.spacing.xl * 3,
    zIndex:50,
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
      left: 20,
      // paddingRight: theme.spacing.xs,
      // paddingLeft: theme.spacing.xs,
      // height:500,
      width: "90%",
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
    zIndex: -100,
  },
}));

type Props = {
  handleScroll: (link: RefObject<HTMLDivElement>) => void;
  contactRef: RefObject<HTMLDivElement>;
};

export function Hero({ handleScroll, contactRef }: Props) {
  const { rive, RiveComponent } = useRive({
    src: "/new_file_5.riv",
    autoplay: true,
  });

  const { classes } = useStyles();

  return (
    <Container size="lg" className={`${classes.inner} `}>
        <div className={classes.content}>
          <Title className={`${classes.title} lg:whitespace-nowrap  `}>
            High Performance <span className={`${classes.highlight} `}>&</span>{" "}
            Rich EC <br />
          </Title>
          <Text
            color="primary"
            mt="md"
            className=" text-lg lg:text-xl tracking-wider "
          >
            shopify最新FW「hydrogen」を使用した高速でリッチなECサイトを業界最安値で制作します。
          </Text>

          <List
            mt={30}
            spacing="sm"
            className="text-xl tracking-wider"
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
            <Button
              radius="xl"
              size="xl"
              rightIcon={<IconArrowNarrowRight />}
              className={`${classes.control} `}
              onClick={() => handleScroll(contactRef)}
            >
              無料で相談してみる
            </Button>
            {/* <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button> */}
          </Group>
        <Image
          src="/undraw_shopping_app_flsj.svg"
          width={200}
          height={500}
          alt="topImage"
          className={`${classes.image} lg:hidden  `}
        />
        </div>
        {/* エラー出てだるいから、最後に反映させる */}
        <div
          className={`${classes.image} hidden lg:inline-flex  absolute left-1/2 top-20 -z-10  w-[700px] h-[550px] `}
        >
          <RiveComponent />
        </div>
    </Container>
  );
}
