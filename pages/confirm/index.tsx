import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Radio,
  Container,
} from "@mantine/core";

import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FormEvent, useEffect } from "react";
import { inputState } from "../../stores/inputAtom";

export default function confirm() {
  const input = useAtom(inputState);

  const { name, email, tel, radio, message } = input[0];

  const router = useRouter();

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
        body: JSON.stringify(input[0]),
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
    <Container size="lg">
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
     
      >
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          確認
        </Title>

        <SimpleGrid
          cols={1}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <div>{name}</div>
          <div>{email}</div>
          <div>{tel}</div>
          <div>{radio}</div>
          <div>{message}</div>
        </SimpleGrid>

        <Group position="center" mt="xl">
          <Button type="submit" size="md" radius="xl" px={50}>
            送信
          </Button>
        </Group>
      </form>
    </Container>
  );
}
