import { Typography } from "@mui/material";
import React from "react";

const Title = ({ titles }) => {
  const { titleName, titleDetails } = titles;

  return (
    <div>
      <Typography
        style={{ color: "#8CD7D7" }}
        sx={{ fontWeight: 500, m: 1 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        {titleName}
      </Typography>
      <Typography
        sx={{ fontWeight: 600, pb: 2 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        {titleDetails}
      </Typography>
    </div>
  );
};

export default Title;
