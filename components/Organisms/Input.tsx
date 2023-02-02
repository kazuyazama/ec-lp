import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Radio,
  Text,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { animated, useInView, useSpring } from "@react-spring/web";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { inputState } from "../../stores/inputAtom";

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {},
  },
}));

export function Input() {
  const [input, setInput] = useAtom(inputState);
  const router = useRouter();

  const { classes } = useStyles();

  const [ref, isInView] = useInView({
    rootMargin: "0% 0px",
  });

  const styles = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 100,
  });

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
    <>
      <Title order={2} size="h1" weight={900} className={classes.title}>
        Contact
      </Title>
      <Text size="sm" mb={50} className={classes.description}>
        お問い合わせ
      </Text>

      <animated.div ref={ref} style={styles}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          console.log(values);
          // setInput((currentInput) => ({...currentInput,...{name:values.name,email:values.email,tel:values.tel,radio:values.radio,message:values.message} }))
          setInput((currentInput) => ({ ...currentInput, ...values }));
          router.push("/confirm");
        })}
      >
        <SimpleGrid
          cols={1}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
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

        <Group position="center" mt={50}>
          <Button type="submit" size="md" radius="xl" px={50}>
            確認
          </Button>
        </Group>
      </form>
      </animated.div>
    </>
  );
}
