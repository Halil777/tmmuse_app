import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import OwnTextField from "../../components/textfield/OwnTextField";

const Push = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Push notification</Typography>
        </Stack>
        <div style={{ background: "#fff", marginTop: "40px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
            p={3}
            mt={3}
          >
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Title TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Title RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Description TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Description RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Profile :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Post :</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Category :
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack
                mt={12}
                pb={5}
                direction={"row"}
                justifyContent={"flex-end"}
              >
                <Button variant="contained" id="add_modal_button">
                  Send
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Push;
