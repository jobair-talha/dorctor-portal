import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Doctor from "../../../images/doctor.png";
import bg from "../../../images/bg.png";

const AppointmentBanner = () => {
  return (
    <Box
      sx={{
        mt: 20,
        mb: 5,
        background: `url(${bg}) no-repeat center`,
        backgroundSize: "cover",
        backgroundColor: "rgba(45, 58, 74, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} lg={6}>
            <img
              style={{ width: "100%", marginTop: "-170px", display: "block" }}
              src={Doctor}
              alt="Doctor Images"
            />
          </Grid>
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
                style={{ color: "#6ACECE" }}
                variant="h5"
                gutterBottom
                component="div"
              >
                APPOINTMENT
              </Typography>
              <Typography
                sx={{ fontWeight: 600 }}
                style={{ color: "#fff" }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Make an Appointment Today
              </Typography>
              <Typography
                sx={{ fontSize: 16, color: "#fff", py: 1 }}
                variant="body1"
                gutterBottom
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its.
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
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
