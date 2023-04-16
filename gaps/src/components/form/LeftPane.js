import { Box } from "@mui/material";
import GAForm from "./GAForm";

export default function LeftPane() {
  return (
    <Box
      margin={2}
      style={{
        height: "100%",
      }}
    >
      <GAForm />
    </Box>
  );
}
