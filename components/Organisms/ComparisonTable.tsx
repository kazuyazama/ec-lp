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
  data: {
    title: string;
    author: string;
    year: string;
    reviews: string;
  }[];
}

export function ComparisonTable({ data }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  const rows = data.map((row) => {
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
            <th className=" basis-1/4  "></th>
            <th className="basis-1/4  ">Year</th>
            <th className="basis-1/4  ">Author</th>
            <th className="basis-1/4 ">Reviews</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
