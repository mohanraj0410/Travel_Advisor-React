import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "../../mapStyles";
import "./styles.css";
import { LocationOnOutlined } from "@mui/icons-material";
import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="mapContainer">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length &&
          places.map((place, i) => (
            <div
              className="markerContainer"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!matches ? (
                <LocationOnOutlined color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className="paper">
                  <Typography
                    className="typography"
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    className="pointer"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt="weather icon"
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
