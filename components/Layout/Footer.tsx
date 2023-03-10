import {
  createStyles,
  Text,
  Container,

  Anchor,
} from "@mantine/core";
import Image from "next/image";
import { RefObject } from "react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 50,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 400,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

// {
//   title: "Information",
//   links: [
//     {
//       label: "????????????",
//       link: "https://www.restarts.co.jp/",
//     },
//   ],
// },

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: RefObject<HTMLDivElement> }[];
  }[];
  handleScroll: (link: RefObject<HTMLDivElement>) => void;
}

export function Footer({ data, handleScroll }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Anchor
        key={index}
        className={classes.link}
        onClick={() => handleScroll(link.link)}
      >
        {link.label}
      </Anchor>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <div className={classes.logo}>
          <Image
            alt="logo"
            src="/hydrostore_logo1.svg"
            width={160}
            height={35}
          />

          <Text
            mt="md"
            size="xs"
            color="dimmed"
            className={classes.description}
          >
            shopidy??????FW???hydrogen???????????????????????????????????????EC??????????????????
          </Text>

          <Text mt="xs" size="xs" color="dimmed">
            ??????????????????????????????????????????????????????????????????
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm" className="">
          ?? 2023 HydroStore All rights reserved.
        </Text>
        <Anchor href="https://www.restarts.co.jp/">
          <Text color="dimmed" size="sm">
            ????????????
          </Text>
        </Anchor>

        {/* <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18}  />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18}  />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18}  />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}
