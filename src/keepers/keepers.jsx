import { Box, Typography } from "@mui/material"
import data from "../data.json"

// Components
import KeeperCard from "./keeperCardComponent/keeperCard"

// Keeper functions
import getMostInformKeeper from "./keeperFunctions"

export default function Keepers() {
  const getAllKeepers = data.filter((keeper) => keeper.element_type === 1)
  const MostInformSection = getMostInformKeeper(getAllKeepers).map(
    (keeper, key) => {
      console.log(keeper)
      return (
        <KeeperCard
          key={key}
          firstName={keeper.first_name}
          secondName={keeper.web_name}
          saves={keeper.saves}
          selectedByPercent={keeper.selected_by_percent}
          averagePointsPerGame={keeper.points_per_game}
          penaltiesSaved={keeper.penalties_saved}
          goalsConceded={keeper.goals_conceded}
          dreamteamCount={keeper.dreamteam_count}
        />
      )
    }
  )
  return (
    <>
      <Typography
        sx={{ marginLeft: "-4px", marginBottom: 2, fontWeight: "400" }}
        variant="h2"
      >
        Most inform keepers
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {MostInformSection}
      </Box>
    </>
  )
}
