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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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

const UpdateConstant = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen} style={{ color: "#F59300" }}>
        <EditOutlinedIcon />
      </IconButton>
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
            <Typography id="add_modal_title"> Update Constant</Typography>
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
              <OwnTextField label="Content TM :" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <OwnTextField label="Content RU :" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <OwnTextField label="Type:(about, privacy)" />
            </Grid>
          </Grid>
          <Stack mt={3} direction={"row"} mb={5} justifyContent={"flex-end"}>
            <Button variant="contained" id="add_modal_button">
              Update Constant
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateConstant;
