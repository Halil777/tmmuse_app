import React from "react";
import {
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import OwnTextField from "../../components/textfield/OwnTextField";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const style = {
  position: "absolute",
  top: "10%",
  left: "20%",
  width: "60%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

const AddInterests = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        startIcon={<AddOutlinedIcon />}
        id="add_button"
        variant="outlined"
        onClick={handleOpen}
      >
        Add interests
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
            <Typography id="add_modal_title"> Add interests</Typography>
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
              <OwnTextField label="Title TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Title RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Items TM:(football,music,tennis)" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Items RU:(football,music,tennis)" />
            </Grid>
          </Grid>
          <Stack mt={3} direction={"row"} mb={5} justifyContent={"flex-end"}>
            <Button variant="contained" id="add_modal_button">
              Add interests
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default AddInterests;
