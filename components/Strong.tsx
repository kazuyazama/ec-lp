import { Container, createStyles } from "@mantine/core";
import { StrongItem } from "./Organisms/StrongItem";

const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl ,
      paddingBottom: theme.spacing.xl * 4,
    },
  }));

const Strong = () => {

    const { classes} = useStyles()
    return (
        <div className={classes.wrapper}>
            <StrongItem />
        </div>
    );
}

export default Strong;