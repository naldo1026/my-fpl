import { Container } from "@mui/material"
import AppBarFPL from "./components/appBarFPL/appBarFPL"
import Keepers from "./keepers/keepers"

function App() {
  return (
    <>
      <AppBarFPL />
      <Container fixed>
        <Keepers />
      </Container>
    </>
  )
}

export default App
