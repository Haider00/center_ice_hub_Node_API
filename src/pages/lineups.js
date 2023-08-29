import React from "react";
import CustomHeader from "../components/customeHeader";
import soccerTeamNames from "../../teams";
import soccerPlayers from "../../players";
import CustomeTableRowOffensive from "../components/CustomeTableRowOffensive";
import CustomeTableRowDefensive from "../components/CustomeTableRowDefensive";
import CustomeTableRowGoalies from "../components/CustomeTableRowGoalies";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  Box,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
} from "@mui/material";

const Lineups = () => {
  const [team, setTeam] = React.useState("");

  const handleChange = (event) => {
    setTeam(event.target.value);
  };
  return (
    <>
      <CustomHeader />
      <Grid
        container
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          marginTop: "80px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "2px",
            marginRight: "2px",
          }}
          item
          lg={2}
          md={2}
          sm={12}
          xs={12}
        >
          <Typography sx={{ mb: 1 }}>Select Team</Typography>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Teams</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={team}
              label="Teams"
              onChange={handleChange}
            >
              {soccerTeamNames.map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", md: "none", lg: "block" } }}
        />

        <Grid
          sx={{
            display: "flex",
            m: "0 auto",
            marginTop: { sm: 5, xs: 5, md: 0 },
          }}
          item
          lg={9}
          md={9}
          sm={12}
          xs={12}
        >
          <Grid>
            {/* Offensive Line */}
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", mr: 2, mb: 2 }}
            >
              <Button sx={{ mr: 2 }} variant="contained">
                Reset
              </Button>
              <Button variant="contained" startIcon={<DeleteIcon />}>
                Trash
              </Button>
            </Box>
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center" }}>
              OFFENSIVE LINE
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {soccerPlayers.map((item) => {
                if (item.position.toLowerCase() === "offensive")
                  return (
                    <Card
                      sx={{
                        minWidth: 200,
                        p: 1,
                        m: 1,
                        textAlign: "center",
                        "@media (max-width: 600px)": {
                          minWidth: "auto", // Adjust the width for small screens
                          padding: "0.5rem", // Adjust padding for small screens
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                    </Card>
                  );
              })}
            </Box>

            <TableContainer component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      LW
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      C
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      RW
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowOffensive />
                  <CustomeTableRowOffensive />
                  <CustomeTableRowOffensive />
                  <CustomeTableRowOffensive />
                </TableBody>
              </Table>
            </TableContainer>

            {/* Defensive Line */}
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center", mt: 5 }}>
              DEFENSIVE LINE
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {soccerPlayers.map((item) => {
                if (item.position.toLowerCase() === "defensive")
                  return (
                    <Card
                      sx={{
                        minWidth: 200,
                        p: 1,
                        m: 1,
                        textAlign: "center",
                        "@media (max-width: 600px)": {
                          minWidth: "auto", // Adjust the width for small screens
                          padding: "0.5rem", // Adjust padding for small screens
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                    </Card>
                  );
              })}
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      LD
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      RD
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowDefensive />
                  <CustomeTableRowDefensive />
                  <CustomeTableRowDefensive />
                </TableBody>
              </Table>
            </TableContainer>

            {/* First PowerPlay unit */}
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center", mt: 5 }}>
              1ST POWERPLAY UNIT
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {soccerPlayers.map((item) => {
                if (item.position.toLowerCase() === "defensive")
                  return (
                    <Card
                      sx={{
                        minWidth: 200,
                        p: 1,
                        m: 1,
                        textAlign: "center",
                        "@media (max-width: 600px)": {
                          minWidth: "auto", // Adjust the width for small screens
                          padding: "0.5rem", // Adjust padding for small screens
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                    </Card>
                  );
              })}
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      LW
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      C
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      RW
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowOffensive />
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ mt: 1 }} component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      LD
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      RD
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowDefensive />
                </TableBody>
              </Table>
            </TableContainer>

            {/* Second Powerplay unit */}
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center", mt: 5 }}>
              2nd POWERPLAY UNIT
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {soccerPlayers.map((item) => {
                if (item.position.toLowerCase() === "defensive")
                  return (
                    <Card
                      sx={{
                        minWidth: 200,
                        p: 1,
                        m: 1,
                        textAlign: "center",
                        "@media (max-width: 600px)": {
                          minWidth: "auto", // Adjust the width for small screens
                          padding: "0.5rem", // Adjust padding for small screens
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                    </Card>
                  );
              })}
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      LW
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      C
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      RW
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowOffensive />
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ mt: 1 }} component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      LD
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      RD
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowDefensive />
                </TableBody>
              </Table>
            </TableContainer>

            {/* Goalies */}
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center", mt: 5 }}>
              GOALIES
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {soccerPlayers.map((item) => {
                if (item.position.toLowerCase() === "golies")
                  return (
                    <Card
                      sx={{
                        minWidth: 200,
                        p: 1,
                        m: 1,
                        textAlign: "center",
                        "@media (max-width: 600px)": {
                          minWidth: "auto", // Adjust the width for small screens
                          padding: "0.5rem", // Adjust padding for small screens
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                    </Card>
                  );
              })}
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ border: "1px solid #152b55" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#152b55", color: "#fff" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        textAlign: "center",
                        border: "1 px solid #152b55",
                      }}
                    >
                      Starting Goalie
                    </TableCell>
                    <TableCell sx={{ color: "#fff", textAlign: "center" }}>
                      Backup Goalie
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CustomeTableRowGoalies />
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h6" sx={{ mb: 1, textAlign: "center", mt: 5 }}>
              INJURIES
            </Typography>
            <Table sx={{ border: "1px solid #152b55" }}>
              <TableBody>
                <CustomeTableRowGoalies />
                <CustomeTableRowGoalies />
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Lineups;
