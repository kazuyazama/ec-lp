import { RefObject, useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Drawer,
  Anchor,

} from "@mantine/core";

import Image from "next/image";


const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.primary[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  //後々使う

  // linkActive: {
  //   "&, &:hover": {
  //     backgroundColor: theme.fn.variant({
  //       variant: "light",
  //       color: theme.primaryColor,
  //     }).background,
  //     color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
  //       .color,
  //   },
  // },
}));

interface HeaderResponsiveProps {
  links: { link: RefObject<HTMLDivElement>; label: string }[];
  handleScroll: (link: RefObject<HTMLDivElement>) => void;
}

export function HeaderMenu({ links, handleScroll }: HeaderResponsiveProps) {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(links[0].link);
  const { classes } = useStyles();

  const items = links.map((link) => (
    //↓後々使用する

    // <Link
    //   key={link.label}
    //   href={link.link}
    //   className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(link.link);
    //     close();
    //   }}
    // >
    //   {link.label}
    // </Link>
    <Anchor
      onClick={() => handleScroll(link.link)}
      key={link.label}
      underline={false}
      // href={link.link}
      // underline={false}
      className={classes.link}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={50} className={classes.root}>
      <Container size="lg" className={classes.header}>
        <Image alt="logo" src="/hydrostore_logo1.svg" width={160} height={35} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        {/* <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition> */}
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="HydroStore"
          padding="lg"
          size="60%"
          lockScroll={false}
          overlayOpacity={0.1}
          withCloseButton={false}
        >
          {items}
          {/* Drawer content */}
        </Drawer>

        <Burger
          opened={opened}
          onClick={() => setOpened((prev) => !prev)}
          className={`${classes.burger} z-50`}
          size="sm"
        />
      </Container>
    </Header>
  );
}
