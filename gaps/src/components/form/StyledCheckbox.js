import { useSelector } from "react-redux";
import { FormControlLabel, Checkbox, Typography, Box } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function StyledCheckbox(props) {
  const colours = useSelector((state) => getColours(state));

  return (
    <Box>
      <FormControlLabel
        label={
          <Typography style={{ color: colours.primary, fontSize: 20 }}>
            {props.label}
          </Typography>
        }
        control={
          <Checkbox
            checked={props.checked}
            onChange={props.onChange}
            disabled={props.required}
            style={{
              color: colours.primary,
            }}
          />
        }
      />
    </Box>
  );
}
