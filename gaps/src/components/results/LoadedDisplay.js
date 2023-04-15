import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import ResultItems from "./ResultItems";
import { getResults } from "../../state/ResultsSlice";

export default function LoadedDisplay() {
  const results = useSelector((state) => getResults(state));

  return (
    <Box
      style={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <ResultItems results={results} />
    </Box>
  );
}
