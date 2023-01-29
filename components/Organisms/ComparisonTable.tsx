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
  text: {},
}));

interface TableReviewsProps {
  comparisonData: {
    title: string;
    author: string;
    year: string;
    reviews: string;
  }[];
}

export function ComparisonTable({ comparisonData }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  const rows = comparisonData.map((row) => {
    return (
      <tr key={row.title} className=" flex ">
        <td className="basis-1/4 ">{row.title}</td>
        <td className="basis-1/4 ">{row.year}</td>
        <td className="basis-1/4 ">{row.author}</td>
        <td className=" basis-1/4 ">{row.reviews}</td>
      </tr>
    );
  });

  return (
    <ScrollArea >
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
            <th className=" basis-1/4  "></th>
            <th className="basis-1/4  ">弊社</th>
            <th className="basis-1/4  ">B社</th>
            <th className="basis-1/4 ">C社</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
