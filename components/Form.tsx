import { Container, createStyles } from "@mantine/core";
import { MutableRefObject, RefObject } from "react";
import { Input } from "./Organisms/Input";

const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl ,
      paddingBottom: theme.spacing.xl * 4,
      scrollMarginTop:theme.spacing.xl
    },
  }));

  type Props = {
    contactRef:RefObject<HTMLDivElement>
  }

const Form = ({contactRef}:Props) => {

    const { classes} = useStyles()
     return (
        <Container ref={contactRef} id="form"  size="lg" className={classes.wrapper}>
            <Input />
        </Container>
    );
}

export default Form;