import { Container, createStyles } from "@mantine/core";
import { Input } from "./Organisms/Input";

const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl ,
      paddingBottom: theme.spacing.xl * 4,
    },
  }));

const Form = () => {

    const { classes} = useStyles()
     return (
        <Container size="lg" className={classes.wrapper}>
            <Input />
        </Container>
    );
}

export default Form;