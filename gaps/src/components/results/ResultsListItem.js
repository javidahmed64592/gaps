import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function ResultsListItem(props) {
  const colours = useSelector((state) => getColours(state));
  const { result } = props;

  return (
    <Typography
      margin={1}
      style={{ color: colours.quaternary, fontSize: "20px" }}
    >
      Generation {result.generation}: {result.best_chromosome}
    </Typography>
  );
}
