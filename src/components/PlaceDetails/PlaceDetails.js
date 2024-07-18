import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";
import "./styles.css"

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card className="card" elevation={6}>
      <CardMedia
        className="cardMedia"
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent className="cardContent">
        <Typography gutterBottom variant="h5" className="typography">
          {place.name}
        </Typography>
        <Box className="box">
          <Rating
            name="read-only"
            value={Number(place.rating)}
            readOnly
            className="rating"
          />
          <Typography component="legend" className="typography">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        <Box className="box">
          <Typography component="legend" className="typography">
            Price
          </Typography>
          <Typography gutterBottom variant="subtitle1" className="typography">
            {place.price_level}
          </Typography>
        </Box>
        <Box className="box">
          <Typography component="legend" className="typography">
            Ranking
          </Typography>
          <Typography gutterBottom variant="subtitle1" className="typography">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box key={award.display_name} className="box" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="typography"
            >
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className="chip" />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className="subtitle"
          >
            <LocationOn />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className="spacing">
            <Phone /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions className="cardActions">
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
