import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setSuccessBooking }) => {
  const { name, time, price, space } = booking;

  const [openBooking, setOpenBooking] = React.useState(false);
  const handleOpenBooking = () => setOpenBooking(true);
  const handleCloseBooking = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={12} md={4} lg={4}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography
            sx={{ color: "#5ED7D3" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography
            sx={{ color: "#7B818E" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            {time}
          </Typography>
          <Typography
            sx={{ color: "#7B818E" }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Fee: {price} TK
          </Typography>
          <Typography
            sx={{ color: "#EDEDED" }}
            variant="caption"
            display="block"
            gutterBottom
          >
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleOpenBooking}
            sx={{ background: "#14D1CC" }}
            variant="contained"
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleCloseBooking={handleCloseBooking}
        setSuccessBooking={setSuccessBooking}
      ></BookingModal>
    </>
  );
};

export default Booking;
