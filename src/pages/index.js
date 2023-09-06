import React, { useEffect, useState } from "react";
import CustomeHeader from "../components/customeHeader";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { api } from "../utils/api";
import { useRouter } from "next/router";

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("./lineups");
    }
  }, []);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  console.log("formData", formData);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = () => {
    if (!formData.username && !formData.password) {
      alert("Enter valid Email & Password");
    } else {
      api
        .userLogin({
          email: formData.username,
          password_hash: formData.password,
        })
        .then((res) => {
          if (res.accessToken) {
            router.push("./lineups");
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("user", JSON.stringify(res.user));
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  };

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
            required
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
            name="username"
            variant="outlined"
            value={formData.username}
            onChange={handleInputChange}
          />
          <Typography
            sx={{ fontSize: 14, mt: 3, fontWeight: "bold" }}
            color="#000"
          >
            Password
          </Typography>
          <TextField
            required
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
            name="password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              sx={{
                backgroundColor: "#fdb735",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#152b55",
                  color: "#fff",
                },
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
