import { Stack } from "@mui/material";
import GAForm from "../components/form/GAForm";
import ResultsDisplay from "../components/results/ResultsDisplay";

export default function MainPage() {
  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      overflow="auto"
      style={{
        height: "100vh",
      }}
    >
      <GAForm />
      <ResultsDisplay />
    </Stack>
  );
}
