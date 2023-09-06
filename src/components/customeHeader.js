import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

function DrawerAppBar(props) {
  const drawerWidth = 240;
  const navItems = ["Home", "Lineups", "Login"];
  const [loginstatus, setLoginStatus] = React.useState("");
  const user = { loggedIn: loginstatus, username: loginstatus.user };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (parsedUser) {
      setLoginStatus({
        loggedIn: true,
        user: parsedUser.username,
      });
    }
  }, []);

  const navigateToPage = (page) => {
    if (page === "Home" && user.loggedIn === true) {
      router.push("./home");
    } else if (page === "Home" && user.loggedIn === false) {
      router.push("./");
    } else if (page === "Lineups") {
      router.push("./lineups");
    } else if (page === "Login") {
      router.push("./");
    }
    handleDrawerToggle(); // Close the drawer after navigation
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(
          (item) =>
            (item !== "Login" || !user.loggedIn) &&
            (item !== "Lineups" || user.loggedIn) && (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() => navigateToPage(item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            )
        )}
      </List>
      {user.loggedIn && (
        <Button sx={{ color: "#fff", mt: 2 }} onClick={() => handleLogout()}>
          Logout ({user.username})
        </Button>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    router.push("./");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#152b55" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Center Ice Lineups
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(
              (item) =>
                (item !== "Login" || !user.loggedIn) &&
                (item !== "Lineups" || user.loggedIn) && (
                  <Button
                    key={item}
                    sx={{
                      color: "#fff",
                      backgroundColor:
                        item === "Login" ? "#3d5389" : "transparent",
                    }}
                    onClick={() => navigateToPage(item)}
                  >
                    {item}
                  </Button>
                )
            )}
          </Box>
          {user.loggedIn && (
            <Button sx={{ color: "#fff" }} onClick={() => handleLogout()}>
              Logout ({user.username})
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
