import { useDispatch, useSelector } from "react-redux";
import { Stack, Typography, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import StyledIconButton from "../buttons/StyledIconButton";
import { getColours } from "../../state/ColourSlice";

export default function StyledNumberField(props) {
  const dispatch = useDispatch();
  const colours = useSelector((state) => getColours(state));
  const regex = /^[0-9\b]+$/;

  const onChangeValue = (event) => {
    if (event.target.value === "") return dispatch(props.onChangeValue(0));
    if (regex.test(event.target.value))
      return dispatch(props.onChangeValue(event.target.value));
  };

  const onIncrementValue = (event) => {
    dispatch(props.onIncrementValue(event.target.value));
  };

  const onDecrementValue = (event) => {
    dispatch(props.onDecrementValue(event.target.value));
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
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <StyledIconButton
          variant="contained"
          icon={<RemoveIcon fontSize="large" />}
          onClick={onDecrementValue}
          size={"large"}
        />
        <TextField
          variant="standard"
          id={props.label}
          value={props.value}
          onChange={onChangeValue}
          type={props.type}
          sx={{
            input: {
              textAlign: "center",
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
        <StyledIconButton
          variant="contained"
          icon={<AddIcon fontSize="large" />}
          onClick={onIncrementValue}
          size={"large"}
        />
      </Stack>
    </Stack>
  );
}
