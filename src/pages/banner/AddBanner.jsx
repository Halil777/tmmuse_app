import React from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import OwnTextField from "../../components/textfield/OwnTextField";
import ImageIcon from "@mui/icons-material/Image";

const style = {
  position: "absolute",
  top: "40%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

const AddBanner = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Button
        startIcon={<AddOutlinedIcon />}
        onClick={handleOpen}
        id="add_button"
        variant="outlined"
      >
        Add banner
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Typography id="add_modal_title">Add banner</Typography>
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
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Site link :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
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
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Order :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                variant="contained"
                id="img_uplad"
                fullWidth
                endIcon={<ImageIcon />}
                component="label"
              >
                Banner image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Comment of admin :" />
            </Grid>
          </Grid>
          <Stack mt={3}>
            <Typography id="add_banner_text">
              Can't and site link and Profle together! Only the profile will be
              accepted if you enter both!
            </Typography>
          </Stack>
          <Stack mt={3} direction={"row"} justifyContent={"flex-end"}>
            <Button variant="contained" id="add_modal_button">
              Add banner
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default AddBanner;
