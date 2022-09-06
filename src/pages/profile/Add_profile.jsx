import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { Stack } from "@mui/system";
import OwnTextField from "../../components/textfield/OwnTextField";
import { AddCircle } from "@mui/icons-material";
import ImageIcon from "@mui/icons-material/Image";

const style = {
  overflowY: "scroll",
  width: "100%",
  height: "100%",
  bgcolor: "#fff",
  p: 4,
};

const Add_profile = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [phone_number_list, setPhone_number_list] = useState([
    {
      phoneNumber: "",
    },
  ]);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const add_phone_number_input = () => {
    setPhone_number_list([
      ...phone_number_list,
      {
        phoneNumber: "",
      },
    ]);
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        startIcon={<AddOutlinedIcon />}
        id="add_button"
        variant="outlined"
      >
        Add profile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography id="add_modal_title">Add profile</Typography>
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Stack>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
            pt={2}
          >
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Name TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Name RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={1.5}>
              <Stack alignItems={"center"}>
                <Typography>is Vip ?</Typography>
                <Checkbox />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={1.5}>
              <OwnTextField label="Order in List" />
            </Grid>
            <Grid item xs={12} sm={6} md={1.5}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
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
            <Grid item xs={12} sm={6} md={1.5}>
              <OwnTextField label="TmMuse Card" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Short description TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Short description RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Category
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
              <OwnTextField label="Own Card :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Description TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Description RU:" />
            </Grid>
            {phone_number_list.map((item, i) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <Stack direction={"row"}>
                    <OwnTextField
                      label="Phone number :"
                      value={item.phoneNumber}
                    />
                    {i != 0 ? (
                      <IconButton>
                        <AddCircle />
                      </IconButton>
                    ) : null}
                  </Stack>
                </Grid>
              );
            })}
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="text"
                startIcon={<AddCircle />}
                onClick={add_phone_number_input}
                id="add_phone_number"
              >
                Add phone number
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Instagram (only username) :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Site URL:" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="contained"
                id="img_uplad"
                fullWidth
                endIcon={<ImageIcon />}
                component="label"
              >
                Top slider (multiple)
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="contained"
                id="img_uplad"
                fullWidth
                endIcon={<ImageIcon />}
                component="label"
              >
                Gallery images (multiple)
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField
                type="number"
                label="Location (ex:37.123,453.12321)"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Address :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="contained"
                id="img_uplad"
                fullWidth
                endIcon={<ImageIcon />}
                component="label"
              >
                VR small image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button
                variant="contained"
                id="img_uplad"
                fullWidth
                endIcon={<ImageIcon />}
                component="label"
              >
                VR large image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField type="number" label="Work hours (09:00-17:00) :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField type="number" label="Free time (13:00-14:00)" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Tags TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <OwnTextField label="Tags RU :" />
            </Grid>
          </Grid>
          <Stack mt={3} direction={"row"} justifyContent={"flex-end"}>
            <Button variant="contained" id="add_modal_button">
              Add profile
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default Add_profile;
