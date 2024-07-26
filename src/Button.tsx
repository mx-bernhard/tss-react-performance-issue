import Button from "@mui/material/Button";
import { range } from "lodash-es";
import { PropsWithChildren } from "react";
import { tss } from "tss-react/mui";

type Props = {
  className?: string;
};

export function MyButton(props: PropsWithChildren<Props>) {
  const { className } = props;

  const { classes, cx } = useStyles();

  return (
    <Button className={cx(classes.root, className)}>{props.children}</Button>
  );
}

// change this to false to observe the big performance difference
const slowDown = true;

const useStyles = tss.create(({ theme }) => ({
  ...Object.fromEntries(
    range(1, slowDown ? 1000 : 1).map((i) => [
      "some-class-" + i,
      {
        color: "red",
        "&:hover": {
          border: "4px solid black",
        },
        [theme.breakpoints.up("md")]: {
          border: "10px solid cyan",
        },
      },
    ])
  ),
  root: {
    minWidth: "80px",
    color: "red",
    // When the curser is over the button has a black border
    "&:hover": {
      border: "4px solid black",
    },
    // On screens bigger than MD the button will have a big cyan border
    [theme.breakpoints.up("md")]: {
      border: "10px solid cyan",
    },
  },
}));
