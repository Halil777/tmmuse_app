import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { pop_up_title } from "../../components/data/title_names/Title.mjs";
import DeletePopUp from "./DeletePopUp";
import AddPopUp from "./AddPopUp";
import UpdatePopUp from "./UpdatePopUp";

const PopUp = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Pop up</Typography>
          <AddPopUp />
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {pop_up_title.map((item, i) => {
                    return (
                      <TableCell align="left" style={{ color: "#fff" }}>
                        {item.title}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ color: "#31456A" }}>1</TableCell>

                  <TableCell align="left" style={{ color: "#31456A" }}>
                    <img
                      src="./images/1.png"
                      width={"100px"}
                      alt="banner_image"
                    />
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    www.saylanan.com
                  </TableCell>

                  <TableCell align="left" style={{ color: "#31456A" }}>
                    3
                  </TableCell>
                  <TableCell align="left">
                    <DeletePopUp />
                  </TableCell>
                  <TableCell align="left">
                    <UpdatePopUp />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Stack direction="row" justifyContent={"center"} mt={5}>
          <Pagination />
        </Stack>
      </div>
    </div>
  );
};

export default PopUp;
