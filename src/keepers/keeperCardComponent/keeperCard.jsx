import { Box, Typography } from "@mui/material"

export default function KeeperCard({
  firstName,
  secondName,
  saves,
  selectedByPercent,
  averagePointsPerGame,
  penaltiesSaved,
  goalsConceded,
  dreamteamCount,
}) {
  return (
    <Box
      sx={{
        padding: 1,
        width: 190,
        borderRadius: 1,
        boxShadow:
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Box>
        <Typography sx={{ marginBottom: 2 }} variant="h5" gutterBottom>
          {firstName} {secondName}
        </Typography>

        <Typography sx={{ marginBottom: 0 }} variant="body1" gutterBottom>
          Saves: <span style={{ fontWeight: "bold" }}>{saves}</span>
        </Typography>

        <Typography sx={{ marginBottom: 0 }} variant="body1" gutterBottom>
          avg points:{" "}
          <span style={{ fontWeight: "bold" }}>{averagePointsPerGame}</span>
        </Typography>

        <Typography sx={{ marginBottom: 0 }} variant="body1" gutterBottom>
          Ownership:{" "}
          <span style={{ fontWeight: "bold" }}>{`${selectedByPercent}%`}</span>
        </Typography>

        <Typography sx={{ marginBottom: 0 }} variant="body1" gutterBottom>
          Penalties saved:{" "}
          <span style={{ fontWeight: "bold" }}>{penaltiesSaved}</span>
        </Typography>

        <Typography sx={{ marginBottom: 0 }} variant="body1" gutterBottom>
          Goals conceded:{" "}
          <span style={{ fontWeight: "bold" }}>{goalsConceded}</span>
        </Typography>

        <Typography sx={{ marginBottom: 0 }} variant="body1" gutterBottom>
          Dreamteam count:{" "}
          <span style={{ fontWeight: "bold" }}>{dreamteamCount}</span>
        </Typography>
      </Box>
    </Box>
  )
}
