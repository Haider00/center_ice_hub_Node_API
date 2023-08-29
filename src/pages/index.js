import React from "react";
import CustomeHeader from "../components/customeHeader";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const Home = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <CustomeHeader />
      <Grid sx={{ maxWidth: "1200px", margin: "0 auto", marginTop: "75px" }}>
        <Card
          sx={{
            minWidth: 275,
            height: "40px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Typography sx={{ fontSize: 14, ml: 2 }} color="#152b55">
            Home
          </Typography>
          <Typography sx={{ fontSize: 14, ml: 1 }} color="text.secondary">
            /&nbsp;&nbsp;Login
          </Typography>
        </Card>

        <Box sx={{ mt: "25px" }}>
          <Typography variant="h4" color="#000">
            Login
          </Typography>
          <Typography sx={{ fontSize: 14, mt: 1 }} color="#000">
            Please fill out the following fields to login:
          </Typography>
          <Typography
            sx={{ fontSize: 14, mt: 1, fontWeight: "bold" }}
            color="#000"
          >
            Username
          </Typography>
          <TextField
            sx={{
              mt: 1,
              width: "40%",
              "& input": {
                height: "40px",
                boxSizing: "border-box",
              },
              "& label.Mui-focused": {
                color: "#fdb735", // Color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fdb735", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "#fdb735", // Border color when hovered
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fdb735", // Border color when focused
                },
              },
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
            id="outlined-basic"
            variant="outlined"
          />
          <Typography
            sx={{ fontSize: 14, mt: 3, fontWeight: "bold" }}
            color="#000"
          >
            Password
          </Typography>
          <TextField
            sx={{
              mt: 1,
              width: "40%",
              "& input": {
                height: "40px",
                boxSizing: "border-box",
              },
              "& label.Mui-focused": {
                color: "#fdb735", // Color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#fdb735", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "#fdb735", // Border color when hovered
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fdb735", // Border color when focused
                },
              },
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
            id="outlined-basic"
            variant="outlined"
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              sx={{
                pl: 0,
                color: "#fdb735", // Border color
                "&.Mui-checked": {
                  color: "#fdb735", // Fill color when checked
                  "&:hover": {
                    backgroundColor: "rgba(253, 183, 53, 0.04)", // Background color when checked and hovered
                  },
                },
              }}
              {...label}
              defaultChecked
            />
            <Typography sx={{ fontSize: 14 }} color="#000">
              Remember Me
            </Typography>
          </Box>
          <Button
            sx={{
              backgroundColor: "#fdb735",
              color: "#000",
              "&:hover": {
                backgroundColor: "#152b55",
                color: "#fff", // Background color on hover
              },
            }}
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
