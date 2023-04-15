import { Stack } from "@mui/material";
import GAForm from "../components/form/GAForm";
import ResultsDisplay from "../components/results/ResultsDisplay";

export default function MainPage() {
  return (
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      margin={4}
      style={{
        height: "80%",
      }}
    >
      <GAForm />
      <ResultsDisplay />
    </Stack>
  );
}
