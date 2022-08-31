import { AppBar, Toolbar, Typography } from "@mui/material"

export default function AppBarFPL() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "#37003c" }} variant="dense">
        <Typography
          sx={{ paddingTop: 3, paddingBottom: 3 }}
          variant="h4"
          color="inherit"
          component="div"
        >
          myFPL
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
