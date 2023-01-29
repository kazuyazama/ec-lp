import {
  Button,
  Container,
  Stack,
  Text,
} from "@mantine/core";
import Link from "next/link";

const thanks = () => {
  return (
    <Container size="lg">
      <Stack justify="center" align="center" spacing="xl">
        <Text align="center">
          お問い合わせありがとうございました。
          <br />
          後ほど担当者よりご連絡をさせて頂きます。
        </Text>

        <Link href="/">
          <Button>ホームに戻る</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default thanks;
