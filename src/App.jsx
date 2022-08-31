import { Box, Container } from "@mui/material"
import AppBarFPL from "./components/appBarFPL/appBarFPL"
import Keepers from "./keepers/keepers"
import Defenders from "./defenders/defenders"

function App() {
  return (
    <>
      <AppBarFPL />
      <Container fixed>
        <Box sx={{ marginBottom: 4 }}>
          <Keepers />
        </Box>

        <Box>
          <Defenders />
        </Box>
      </Container>
    </>
  )
}

export default App
