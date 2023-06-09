import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { resultDisplays } from "../../public/ResultDisplays";
import { getDisplay } from "../../state/ResultsSlice";
import { getColours } from "../../state/ColourSlice";

export default function ResultsDisplay() {
  const colours = useSelector((state) => getColours(state));
  const display = useSelector((state) => getDisplay(state));

  return (
    <Box
      border={2}
      borderColor={colours.primary}
      margin={2}
      height="80vh"
      overflow="auto"
      style={{ flexGrow: 1 }}
    >
      {resultDisplays[display]}
    </Box>
  );
}
