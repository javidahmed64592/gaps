import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function ResultsDisplay() {
  const colours = useSelector((state) => getColours(state));

  return (
    <Box
      border={2}
      borderColor={colours.primary}
      margin={2}
      style={{ flexGrow: 1, height: "80%" }}
    >
      <Typography style={{ color: colours.quaternary }}>Results</Typography>
    </Box>
  );
}
