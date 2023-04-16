import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import ResultsListItem from "./ResultsListItem";
import { getColours } from "../../state/ColourSlice";

export default function ResultsList(props) {
  const colours = useSelector((state) => getColours(state));
  const { results } = props;

  return (
    <Stack direction="column" alignItems="center">
      <Typography style={{ color: colours.quaternary, fontSize: "24px" }}>
        Results
      </Typography>
      <Stack direction="column" style={{ width: "100%" }}>
        {results.map((result) => (
          <ResultsListItem key={result.generation} result={result} />
        ))}
      </Stack>
    </Stack>
  );
}
