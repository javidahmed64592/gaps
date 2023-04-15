import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function ResultItems(props) {
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
        {results.map((result) => {
          return (
            <Typography
              margin={1}
              style={{ color: colours.quaternary, fontSize: "20px" }}
            >
              Generation {result.generation}: {result.best_chromosome}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
}
