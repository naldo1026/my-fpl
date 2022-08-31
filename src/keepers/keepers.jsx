import { Typography } from "@mui/material"
import data from "../data.json"

// Keeper functions
import getMostInformKeeper from "./keeperFunctions"

export default function Keepers() {
  const getAllKeepers = data.filter((keeper) => keeper.element_type === 1)
  console.log(getMostInformKeeper(getAllKeepers))
  return (
    <>
      <Typography
        sx={{ marginLeft: "-4px", marginBottom: 2, fontWeight: "400" }}
        variant="h2"
      >
        Most inform keepers
      </Typography>
    </>
  )
}
