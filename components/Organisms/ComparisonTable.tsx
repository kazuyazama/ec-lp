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

const useStyles = createStyles((theme) => ({
  ourfirm: {
    backgroundColor: theme.colors.primary[6],
  },
}));

interface TableReviewsProps {
  comparisonData: {
    title: string;
    ourfirm: string;
    otherB: string;
    otherC: string;
  }[];
}

export function ComparisonTable({ comparisonData }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  const rows = comparisonData.map((row) => {
    return (
      <tr key={row.title} className=" flex  ">
        <td className="basis-1/4 ">{row.title}</td>
        <td className="basis-1/4 ">{row.ourfirm}</td>
        <td className="basis-1/4 ">{row.otherB}</td>
        <td className=" basis-1/4 ">{row.otherC}</td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table
        striped
        withBorder
        withColumnBorders
        sx={{ minWidth: 800 }}
        verticalSpacing="xs"
        horizontalSpacing="md"
      >
        <thead>
          <tr className="flex">
            <th className=" basis-1/4 "></th>
            <th className={`basis-1/4 ${classes.ourfirm}`}>
              <span className=" text-white">弊社</span>
            </th>
            <th className="basis-1/4  ">B社</th>
            <th className="basis-1/4 ">C社</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
