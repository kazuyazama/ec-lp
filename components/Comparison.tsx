import { Container, Title } from "@mantine/core";
import { ComparisonTable, } from "./Organisms/ComparisonTable";

const Comparison = () => {


       const data = [
          {
            "title": "Foundation",
            "author": "○",
            "year": "○",
            "reviews": "○"
          },
          {
            "title": "Frankenstein",
            "author": "○",
            "year": "○",
            "reviews": "○"
          },
          {
            "title": "Solaris",
            "author": "○",
            "year": "○",
            "reviews": "○"
          },
          {
            "title": "Dune",
            "author": "○",
            "year": "○",
        "reviews": "○"
          },
          {
            "title": "The Left Hand of Darkness",
            "author": "○",
            "year": "○",
        "reviews": "○"
          },
          {
            "title": "A Scanner Darkly",
            "author": "○",
            "year": "○",
            "reviews": "×"
          }
        ]
    return (
        <Container size="lg">
            <Title align="center">料金比較</Title>
            <ComparisonTable data={data} />
        </Container>
    );
}

export default Comparison;