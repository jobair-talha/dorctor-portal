import React from "react";

import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import { Container, Grid } from "@mui/material";
import Service from "../Service/Service";
import { Box } from "@mui/system";
import Title from "../../Shared/Title/Title";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
    img: whitening,
  },
];
const title = [
  {
    titleName: "Our Services",
    titleDetails: "Services We Provide",
  },
];
const Services = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5 }}>
      <Container>
        {title.map((title) => (
          <Title titles={title} key={title.titleName}></Title>
        ))}
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {services.map((service) => (
            <Service service={service} key={service.name}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
