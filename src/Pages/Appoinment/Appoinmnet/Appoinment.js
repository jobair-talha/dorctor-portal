import * as React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppointments from "../AvailabeAppointments/AvailableAppointments";

const Appoinment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appoinment;
