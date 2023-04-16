import { Box, Stack } from "@mui/material";
import LeftPane from "../components/form/LeftPane";
import ResultsDisplay from "../components/results/ResultsDisplay";

export default function MainPage() {
  return (
    <Box margin={2} height="100vh" display="flex" flexDirection="column">
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
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
