import {
  Group,
  Title,
  Button,
  Container,
  Stack,
  List,
  createStyles,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { FormEvent, useEffect } from "react";
import { inputState } from "../../stores/inputAtom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 4,
  },
}));

function Confirm() {
  const input = useAtomValue(inputState);

  const { name, email, tel, radio, message } = input;

  const router = useRouter();

  const { classes } = useStyles();

  const largeScreen = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    const redirect = () => {
      if (!name && !email && !tel) {
        return router.push("/");
      }
    };
    redirect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (response.status === 200) {
        console.log("成功");
        router.push("/confirm/thanks");
      }
    } catch (error) {
      console.error("エラーが発生しました: ", error);
    }
  };

  return (
    <Container size="lg" className={classes.wrapper}>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <Stack>
          <Title size={largeScreen ? "h1" : "h3"} weight={900} align="center">
            入力内容をご確認ください。
          </Title>
          <Text align="center">
            入力内容を確認の上、よろしければ「送信」ボタンを押してください
          </Text>
        </Stack>

        <List spacing="xl" center listStyleType="none" mt={50}>
          <List.Item>
            <Text>お名前</Text>
            <Text>{name}</Text>
          </List.Item>

          <List.Item>
            <Text>メールアドレス</Text>
            <Text>{email}</Text>
          </List.Item>

          <List.Item>
            <Text>電話番号</Text>
            <Text>{tel}</Text>
          </List.Item>

          <List.Item>
            <Text>現在の状況</Text>
            {radio && <Text>{radio}</Text>}
          </List.Item>

          <List.Item>
            <Text>質問など</Text>
            {message && (
              <Text h={50} className="max-w-full">
                {message}
              </Text>
            )}
          </List.Item>
        </List>

        <Group position="center" mt={70}>
          <Button
            onClick={() => router.back()}
            type="button"
            size="md"
            radius="xl"
            variant="white"
            px={50}
          >
            戻る
          </Button>
          <Button type="submit" size="md" radius="xl" px={50}>
            送信する
          </Button>
        </Group>
      </form>
    </Container>
  );
}

export default Confirm;