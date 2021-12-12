import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import Treatment from "../../../images/treatment.jpg";

const Terms = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} lg={6}>
            <img
              style={{ width: "100%" }}
              src={Treatment}
              alt="Treatment Images"
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
                style={{ color: "#1B2B43" }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Exceptional Dental <br /> Care, on Your Terms
              </Typography>
              <Typography
                sx={{ fontSize: 16, color: "text.secondary", py: 2 }}
                variant="body1"
                gutterBottom
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page.
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

export default Terms;
