import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import "./Banner.css";

const Banner = () => {
  const bannerBg = {
    background: `url(${bg}) no-repeat center`,
    backgroundSize: "cover",
    backgroundColor: "rgba(213.213.213.0.9)",
    backgroundBlendMode: "overlay",
  };
  return (
    <Box className="banner" style={bannerBg} sx={{ py: 13 }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
            }}
            xs={12}
            md={6}
            lg={6}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 600 }}
                style={{ color: "#1B2B43" }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Your New Smile <br /> Starts Here
              </Typography>
              <Typography
                sx={{
                  width: "80%",
                  fontSize: 16,
                  color: "text.secondary",
                  py: 2,
                }}
                variant="body1"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                doloribus rerum deleniti officia accusantium mollitia!
              </Typography>
              <Button
                style={{ background: "#18D2B4" }}
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "info.contrastText",
                  py: 1,
                  px: 3,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img style={{ width: "100%" }} src={Chair} alt="Treatment Images" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
