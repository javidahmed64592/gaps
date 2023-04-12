import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/system";
import { Typography, TextField } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function FormField(props) {
  const dispatch = useDispatch();
  const colours = useSelector((state) => getColours(state));

  const onChangeValue = (event) => {
    dispatch(props.onChangeValue(event.target.value));
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="fit-content"
    >
      <Typography
        style={{
          color: colours.primary,
          fontSize: "24px",
        }}
      >
        {props.label}
      </Typography>
      <TextField
        autoFocus
        variant="standard"
        id={props.label}
        value={props.value}
        onChange={onChangeValue}
        type={props.type}
        fullWidth
        sx={{
          input: {
            color: colours.primary,
            backgroundColor: colours.tertiary,
            fontSize: "24px",
            border: 2,
            borderColor: colours.primary,
          },
        }}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </Stack>
  );
}
