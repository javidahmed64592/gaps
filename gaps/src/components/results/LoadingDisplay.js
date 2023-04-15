import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function LoadingDisplay() {
  const colours = useSelector((state) => getColours(state));

  return (
    <Box
      style={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography style={{ color: colours.quaternary, fontSize: "24px" }}>
        Loading...
      </Typography>
    </Box>
  );
}
