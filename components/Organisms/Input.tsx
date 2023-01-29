import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Radio,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { inputState } from "../../stores/inputAtom";

export function Input() {
  const [input, setInput] = useAtom(inputState);
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: input.name,
      email: input.email,
      tel: input.tel,
      radio: input.radio,
      message: input.message,
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) =>
        value.trim().length < 1
          ? "必須項目です"
          : !/^\S+@\S+$/.test(value) && "正しい形式で入力してください",
      tel: (value) =>
        value.trim().length < 1
          ? "必須項目です"
          : !/^0[0-9]{9,10}$/.test(value) && "正しい形式で入力してください",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        console.log(values);
        // setInput((currentInput) => ({...currentInput,...{name:values.name,email:values.email,tel:values.tel,radio:values.radio,message:values.message} }))
        setInput((currentInput) => ({ ...currentInput, ...values }));
        router.push("/confirm");
      })}
    >
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        お問い合わせ
      </Title>

      <SimpleGrid cols={1} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <TextInput
          label="お名前"
          placeholder="山田太郎"
          name="お名前"
          variant="filled"
          withAsterisk
          {...form.getInputProps("name")}
        />
        <TextInput
          label="メールアドレス"
          placeholder="yamada@gmail.com"
          name="メールアドレス"
          variant="filled"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <TextInput
          label="連絡先電話番号"
          placeholder="09012345678"
          name="連絡先電話番号"
          variant="filled"
          withAsterisk
          {...form.getInputProps("tel")}
        />
        <Radio.Group
          name="favoriteFramework"
          orientation="vertical"
          label="現在の状況"
          offset="sm"
          {...form.getInputProps("radio")}
        >
          <Radio
            value="ECサイトを持っていない"
            label="ECサイトを持っていない"
          />
          <Radio
            value="shopifyでECサイトを持っている"
            label="shopifyでECサイトを持っている"
          />
          <Radio
            value="shopify以外のECサイトを持っている"
            label="shopify以外のECサイトを持っている"
          />
        </Radio.Group>
      </SimpleGrid>

      <Textarea
        mt="md"
        label="ご相談内容等"
        placeholder="現在のshopifyから移行できますか？"
        maxRows={10}
        minRows={5}
        autosize
        name="ご相談内容等"
        variant="filled"
        {...form.getInputProps("message")}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md" radius="xl" px={50}>
          確認
        </Button>
      </Group>
    </form>
  );
}
