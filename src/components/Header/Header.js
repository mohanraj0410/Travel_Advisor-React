import React from "react";
import "./styles.css"; // Import the CSS file
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title show">
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className="title show">
            Explore New Places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search wide">
              <InputBase
                placeholder="Search..."
                classes={{ root: "inputRoot", input: "inputInput wide" }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
