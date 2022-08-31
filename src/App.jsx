import data from "./data.json"
import AppBarFPL from "./appBarFPL/appBarFPL"

// .slice(0, 5)

function App() {
  const getKeepers = data.filter((keeper) => keeper.element_type === 1)
  // const getDefenders = data.filter((keeper) => keeper.element_type === 2)
  // const getMidfielders = data.filter((keeper) => keeper.element_type === 3)
  // const getForwards = data.filter((keeper) => keeper.element_type === 4)

  console.log(getKeepers.sort((a, b) => b.saves - a.saves))

  return (
    <>
      <AppBarFPL />
    </>
  )
}

export default App
