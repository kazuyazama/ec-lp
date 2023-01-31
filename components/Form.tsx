import { Container, createStyles } from "@mantine/core";
import { MutableRefObject } from "react";
import { Input } from "./Organisms/Input";

const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl ,
      paddingBottom: theme.spacing.xl * 4,
      scrollMarginTop:theme.spacing.xl
    },
  }));

type Props = {
  targetRef:MutableRefObject<HTMLDivElement>
}

const Form = ({targetRef}:Props) => {

    const { classes} = useStyles()
     return (
        <Container id="form" ref={targetRef} size="lg" className={classes.wrapper}>
            <Input />
        </Container>
    );
}

export default Form;