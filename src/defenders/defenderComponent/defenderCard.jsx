import { Box, Typography } from "@mui/material"

export default function DefenderCard({
  firstName,
  secondName,
  selectedByPercent,
}) {
  return (
    <>
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
            Ownership: <span style={{ fontWeight: "bold" }}>lol</span>
          </Typography>
        </Box>
      </Box>
    </>
  )
}
