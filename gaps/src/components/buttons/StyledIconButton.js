import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function StyledIconButton(props) {
  const colours = useSelector((state) => getColours(state));

  return (
    <IconButton
      variant={props.variant}
      onClick={props.onClick}
      size={props.size}
      style={{
        color: colours.primary,
      }}
    >
      {props.icon}
    </IconButton>
  );
}
