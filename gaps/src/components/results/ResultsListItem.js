import { useSelector } from "react-redux";
import { Typography, Grid } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function ResultsListItem(props) {
  const colours = useSelector((state) => getColours(state));
  const { result } = props;

  return (
    <Grid sx={{ flexGrow: 1 }} container justifyContent="center">
      <Grid item xs={4}>
        <Typography
          margin={1}
          style={{ color: colours.quaternary, fontSize: "20px" }}
        >
          {`Generation ${result.generation}: `}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          margin={1}
          style={{
            color: colours.quaternary,
            fontSize: "20px",
          }}
        >
          {result.best_chromosome}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          margin={1}
          style={{ color: colours.quaternary, fontSize: "20px" }}
        >
          {` (${result.max_fitness}%)`}
        </Typography>
      </Grid>
    </Grid>
  );
}
