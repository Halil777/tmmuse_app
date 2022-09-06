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
import { interests_title } from "../../components/data/title_names/Title.mjs";
import DeleteInterests from "./DeleteInterests";
import AddInterests from "./AddInterests";
import UpdateInterests from "./UpdateInterests";

const Interests = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Interests</Typography>
          <AddInterests />
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {interests_title.map((item, i) => {
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
                    Berkarar sowda we dyc alys merkezi
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    3
                  </TableCell>
                  <TableCell align="left">
                    <DeleteInterests />
                  </TableCell>
                  <TableCell align="left">
                    <UpdateInterests />
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

export default Interests;
