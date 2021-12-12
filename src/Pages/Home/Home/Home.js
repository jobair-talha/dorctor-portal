import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Details from "../Details/Details";
import Terms from "../Terms/Terms";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Details></Details>
      <Services></Services>
      <Terms></Terms>
      <AppointmentBanner></AppointmentBanner>
      <Review></Review>
    </div>
  );
};

export default Home;
