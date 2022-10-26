import { Button } from "@mui/material";

export const Commonbutton = (props) => {
  const { style, classname, variant, label } = props;

  return (
    <Button variant={variant} className={classname} style={style}>
      {label}
    </Button>
  );
};
