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
import OwnTextField from "../../components/textfield/OwnTextField";
import ImageIcon from "@mui/icons-material/Image";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const style = {
  position: "absolute",
  left: "20%",
  width: "60%",
  height: "100%",
  overflowY: "scroll",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

const AddPost = () => {
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
        id="add_button"
        variant="outlined"
        onClick={handleOpen}
      >
        Add Post
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
            <Typography id="add_modal_title"> Add Post</Typography>
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
              <OwnTextField label="Name TM :" />
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
              <OwnTextField label="Name RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                variant="contained"
                id="img_uplad"
                fullWidth
                endIcon={<ImageIcon />}
                component="label"
              >
                Post image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Description TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Description RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Promotion :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label=" Comment of Admin :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status :</InputLabel>
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
              <OwnTextField label="Site link :" />
            </Grid>
          </Grid>
          <Stack mt={3} direction={"row"} justifyContent={"flex-end"}>
            <Button variant="contained" id="add_modal_button">
              Add post
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
