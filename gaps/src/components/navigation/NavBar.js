import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: props.colours.primary }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            {props.navbarHeader}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
