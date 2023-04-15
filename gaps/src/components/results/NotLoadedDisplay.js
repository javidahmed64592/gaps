import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { getColours } from "../../state/ColourSlice";

export default function NotLoadedDisplay() {
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
        Run algorithm to generate results.
      </Typography>
    </Box>
  );
}
