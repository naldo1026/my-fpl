import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export default function AppBarFPL() {
  return (
    <AppBar sx={{ marginBottom: 3 }} position="static">
      <Toolbar sx={{ backgroundColor: "#37003c" }} variant="dense">
        <Container fixed>
          <Typography
            sx={{ paddingTop: 3, paddingBottom: 3 }}
            variant="h4"
            color="inherit"
            component="div"
          >
            myFPL
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
