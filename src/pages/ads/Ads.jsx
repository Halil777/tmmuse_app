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
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { ads_title } from "../../components/data/title_names/Title.mjs";
import Delete_ads from "./Delete_ads";
import Add_ads from "./Add_ads";
import Update_ads from "./Update_ads";

const Ads = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Ads</Typography>
          <Add_ads />
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {ads_title.map((item, i) => {
                    return (
                      <TableCell style={{ color: "#fff" }}>
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
                    Berkarar sowda we dyc alys merkezi
                  </TableCell>
                  <TableCell align="center" style={{ color: "#31456A" }}>
                    3
                  </TableCell>
                  <TableCell align="left">
                    <Delete_ads />
                  </TableCell>
                  <TableCell align="left">
                    <Update_ads />
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

export default Ads;
