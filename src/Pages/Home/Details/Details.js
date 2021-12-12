import { Container, Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box } from "@mui/system";
import React from "react";

const Details = () => {
  return (
    <Box sx={{ marginTop: "-85px" }}>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 5,
                px: 2,
                background: "#1CC7C1",
                color: "#fff",
              }}
            >
              <AccessTimeIcon style={{ fontSize: "40px", width: "20%" }} />
              <Box sx={{ width: "80%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, fontSize: 22 }}
                  gutterBottom
                  component="div"
                >
                  Opening Hour
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Our hospital ppen early in the morning at 8.00 am
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 6.5,
                px: 2,
                background: "#3A4256",
                color: "#fff",
              }}
            >
              <FmdGoodIcon style={{ fontSize: "40px", width: "20%" }} />
              <Box sx={{ width: "80%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, fontSize: 22 }}
                  gutterBottom
                  component="div"
                >
                  Visit Our Location
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Dhaka, Bangladesh
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 6.5,
                px: 2,
                background: "#1CC7C1",
                color: "#fff",
              }}
            >
              <LocalPhoneIcon style={{ fontSize: "40px", width: "20%" }} />
              <Box sx={{ width: "80%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, fontSize: 22 }}
                  gutterBottom
                  component="div"
                >
                  Contact Us Now
                </Typography>
                <Typography variant="body1" gutterBottom>
                  +8801724-721383
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
