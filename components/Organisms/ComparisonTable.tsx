import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  Flex,
} from "@mantine/core";
import { animated, useInView, useSpring } from "@react-spring/web";
import { Icon, IconCircle } from "@tabler/icons-react";
import { ReactNode } from "react";

const useStyles = createStyles((theme) => ({
  ourfirm: {
    backgroundColor: theme.colors.primary[6],
    display: "grid",
    placeItems: "center",
  },
  other: {
    display: "grid",
    placeItems: "center",
  },
  td: {
    display: "grid",
    placeItems: "center",
  },
  correct: {
    color: theme.colors.red[8],
    fontSize: theme.fontSizes.xl,
  },
}));

interface TableReviewsProps {
  comparisonData: {
    title: string;
    ourfirm:any;
    otherB:any;
    otherC:any;
  }[];
}

export function ComparisonTable({ comparisonData }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  const [ref, isInView] = useInView({
    rootMargin: "0% 0px",
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
   
  });

  const rows = comparisonData.map((row) => {
    return (
      <tr key={row.title} className=" flex ">
        <td className="basis-1/4 ">{row.title}</td>

        <td className={`basis-1/4  ${classes.td} ${row.ourfirm === "○" && classes.correct}`}>
          {row.ourfirm}
        </td>
        <td className={`basis-1/4  ${classes.td} ${row.otherB === "○" && classes.correct}`}>
          {row.otherB}
        </td>
        <td className={` basis-1/4 ${classes.td}  ${row.otherC === "○" && classes.correct} `}>
          {row.otherC}
        </td>
      </tr>
    );
  });

  return (
    <animated.div ref={ref} style={styles}>
    <ScrollArea>
      <Table
        striped
        withBorder
        withColumnBorders
        sx={{ minWidth: 800 }}
        verticalSpacing="xs"
        horizontalSpacing="md"
        className="  border-collapse"
      >
        <thead>
          <tr className="flex  text-lg">
            <th className=" basis-1/4 "></th>
            <th className={`basis-1/4 ${classes.ourfirm}`}>
              <span className=" text-white">弊社</span>
            </th>
            <th className={`basis-1/4 ${classes.other}`}>B社</th>
            <th className={`basis-1/4 ${classes.other}`}>C社</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    </animated.div>
  );
}
