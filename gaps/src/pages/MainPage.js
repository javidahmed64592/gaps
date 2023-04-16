import { Box, Stack } from "@mui/material";
import LeftPane from "../components/form/LeftPane";
import ResultsDisplay from "../components/results/ResultsDisplay";

export default function MainPage() {
  return (
    <Box
      margin={2}
      style={{
        height: "100%",
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={{
          flexGrow: 1,
        }}
      >
        <LeftPane />
        <ResultsDisplay />
      </Stack>
    </Box>
  );
}
