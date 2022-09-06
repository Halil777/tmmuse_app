import React from "react";
import { Button, IconButton, Modal, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute",
  top: "30%",
  left: "59%",
  transform: "translate(-50%, -50%)",
  width: "38%",
  display: "block",
  borderRadius: "16px",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const DeleteTmMuseCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconButton onClick={handleOpen} style={{ color: "#CD2791" }}>
        <DeleteOutlinedIcon />
      </IconButton>
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
            <Typography id="delete_modal_text">
              Do you want delete this TmMuse card ???
            </Typography>
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"flex-end"}
            spacing={3}
            mt={5}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              id="outlined_button"
            >
              No
            </Button>
            <Button variant="contained" id="add_modal_button">
              Yes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteTmMuseCard;
