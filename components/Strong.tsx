import { Container, createStyles } from "@mantine/core";
import { StrongItem } from "./Organisms/StrongItem";
import { strongData } from "../assets/strong"

const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl ,
      paddingBottom: theme.spacing.xl * 4,
      scrollMarginTop:theme.spacing.xl
    },
  }));

const Strong = () => {

    const { classes} = useStyles()
    return (
        <div id="strong" className={classes.wrapper}>
            <StrongItem strongData={strongData} />
        </div>
    );
}

export default Strong;