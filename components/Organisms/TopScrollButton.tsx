import { UnstyledButton, } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";

type Props = {
    scrollTo:any;
}

const TopScrollButton = ({scrollTo}:Props) => {
    return (
        <UnstyledButton
          p="xs"
          className="fixed bottom-7 right-7"
          onClick={() => scrollTo({ y: 0 })}
          sx={(theme) => ({
            backgroundColor: theme.colors.accent[5],
            borderRadius: theme.radius.xl,
          })}
        >
          <IconChevronUp color="white" />
        </UnstyledButton>
    );
}

export default TopScrollButton;