import { useSelector } from "react-redux";
import { Box, Typography, Stack } from "@mui/material";
import { getResults } from "../../state/ResultsSlice";
import { getColours } from "../../state/ColourSlice";

export default function LoadedDisplay() {
  const colours = useSelector((state) => getColours(state));
  const results = useSelector((state) => getResults(state));

  return (
    <Box
      style={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Typography style={{ color: colours.quaternary, fontSize: "24px" }}>
        Results
      </Typography>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {results.bestChromosome.map((chromosome) => console.log(chromosome))}
      </Stack>
    </Box>
  );
}
