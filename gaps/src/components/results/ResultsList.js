import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import ResultsListItem from "./ResultsListItem";
import { getColours } from "../../state/ColourSlice";

export default function ResultsList(props) {
  const colours = useSelector((state) => getColours(state));
  const { results } = props;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ flexGrow: 1 }}
    >
      <Typography style={{ color: colours.quaternary, fontSize: "24px" }}>
        Results
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        overflow="auto"
        style={{ flexGrow: 1, width: "100%", display: "flex" }}
      >
        {results.map((result) => (
          <ResultsListItem key={result.generation} result={result} />
        ))}
      </Stack>
    </Stack>
  );
}
