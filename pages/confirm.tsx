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
import { useEffect } from "react";
import { inputState } from "../stores/inputAtom";

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

  // useEffect(() => {
  //   if(router.isReady) {
  //     return router.push("/")
  //   }
  // },[])

  // console.log(router.pathname)
  // if(router.pathname !== "/" || input === null || undefined) {
  //   return router.push("/")
  // }

  // const onSubmit = async (data) => {
  //   //emailjsに送信する処理
  //   console.log(data);
  //   const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  //   const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  //   const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  //   if (
  //     userID !== undefined &&
  //     serviceID !== undefined &&
  //     templateID !== undefined
  //   ) {
  //     init(userID);
  //     send(serviceID, templateID, data).then(
  //       () => {
  //         router.push(
  //           { pathname: "contact/complete", query: { display: "ok" } },
  //           "contact/complete"
  //         );
  //       },
  //       () => {
  //         alert("送信出来ませんでした");
  //       }
  //     );
  //     reset();
  //   }
  // };

  return (
    <Container size="lg">
    <form
      onSubmit={() => {
        router.push("/");
      }}
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

      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
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

