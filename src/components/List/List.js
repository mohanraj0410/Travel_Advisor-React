import React, { useState, useEffect, createRef } from "react";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./styles.css";
import {
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const List = ({
  places,
  type,
  setType,
  rating,
  setRating,
  childClicked,
  isLoading,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">
          <CircularProgress size="4rem" />
        </div>
      ) : (
        <div className="xxxx">
          <div className="bbbb">
            <FormControl className="formControl">
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                label="Type"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="formControl">
              <InputLabel id="rating-select-label">Rating</InputLabel>
              <Select
                labelId="rating-select-label"
                label="Rating"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="3">Above 3.0</MenuItem>
                <MenuItem value="4">Above 4.0</MenuItem>
                <MenuItem value="4.5">Above 4.5</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Grid container spacing={2} className="list">
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default List;
