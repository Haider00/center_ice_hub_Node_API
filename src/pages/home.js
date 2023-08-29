import { Box, Typography } from "@mui/material";
import React from "react";
import CustomeHeader from "../components/customeHeader";
const Home = () => {
  return (
    <>
      <CustomeHeader />
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", marginTop: "150px" }}>
        <Typography sx={{ textAlign: "center" }} variant="h2">
          Welcome to
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Center Ice Lineups!
        </Typography>
      </Box>
    </>
  );
};

export default Home;
