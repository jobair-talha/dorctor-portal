import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Calender from "../../Shared/Calender/Calender";

const AppoinmentBanner = ({ date, setDate }) => {
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
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              sx={{ fontWeight: 600 }}
              style={{ color: "#1B2B43" }}
              variant="h3"
              gutterBottom
              component="div"
            >
              APPOINTMENT
            </Typography>
            <Calender
              sx={{ width: "100%" }}
              date={date}
              setDate={setDate}
            ></Calender>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img style={{ width: "100%" }} src={Chair} alt="Treatment Images" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppoinmentBanner;
