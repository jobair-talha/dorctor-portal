import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Card sx={{ textAlign: "center", border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "80", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ my: 2, fontWeight: 600 }}
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography sx={{ color: "text.secondary" }} variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
