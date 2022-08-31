import { Box, Typography } from "@mui/material"
import data from "../data.json"

// Defender functions
import getMostInformDefender from "./defenderFunctions"

// Components
import DefenderCard from "./defenderComponent/defenderCard"

export default function Defenders() {
  const getAllDefenders = data.filter((defender) => defender.element_type === 2)

  const mostInformSection = getMostInformDefender(getAllDefenders).map(
    (defender, key) => {
      return (
        <DefenderCard
          key={key}
          firstName={defender.first_name}
          secondName={defender.web_name}
        />
      )
    }
  )

  console.log(getMostInformDefender(getAllDefenders))

  return (
    <>
      <Typography
        sx={{ marginLeft: "-4px", marginBottom: 2, fontWeight: "400" }}
        variant="h2"
      >
        Most inform defenders
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {mostInformSection}
      </Box>
    </>
  )
}
