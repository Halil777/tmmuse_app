import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import OwnTextField from "../../components/textfield/OwnTextField";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
          pt={2}
        >
          <Grid item xs={12} sm={6} md={6}>
            <OwnTextField label="Name TM :" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <OwnTextField label="Name TM :" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
