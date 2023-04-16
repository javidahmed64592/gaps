import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import NavBar from "./components/navigation/NavBar";
import { pages } from "./public/Pages";
import { getColours } from "./state/ColourSlice";
import { getPage, getNavbarHeader } from "./state/PageSlice";

export default function App() {
  const colours = useSelector((state) => getColours(state));
  const pageState = useSelector((state) => getPage(state));
  const navbarHeader = useSelector((state) => getNavbarHeader(state));

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      overflow="auto"
      style={{ backgroundColor: colours.secondary, flexGrow: 1 }}
    >
      <NavBar colours={colours} navbarHeader={navbarHeader} />
      {pages[pageState]}
    </Box>
  );
}
