import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@mui/material/Button";
export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link to="/technology" style={{ textDecoration: "none" }}>
          <Tab label="Technology" />
        </Link>
        <Link to="/food">
          <Tab label="Food" />
        </Link>
        <Link to="/Languagelearning">
          <Tab label="Language Learning" />
        </Link>
        <Link to="/technology">
          <Tab label="Movies" />
        </Link>
        <Link to="/Movies">
          {" "}
          <Tab label="Movies" />
        </Link>
        <Link to="/Cultures">
          {" "}
          <Tab label="Cultures" />
        </Link>
        <Link to="/Art">
          {" "}
          <Tab label="Art" />
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", margin: "0.5rem" }}>
          <Button variant="contained">Login/Signup</Button>
        </Link>
      </Tabs>
    </Box>
  );
}
