import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { getColours } from "../state/ColourSlice";

export default function MainPage() {
  const colours = useSelector((state) => getColours(state));

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      overflow="auto"
      style={{
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <Typography style={{ color: colours.quaternary }}>
        Genetic Algorithms - Phrase Solver
      </Typography>
    </Stack>
  );
}
