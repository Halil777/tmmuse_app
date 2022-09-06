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
import { constants_title } from "../../components/data/title_names/Title.mjs";
import AddConstant from "./AddConstants";
import DeleteConstant from "./DeleteConstant";
import UpdateConstant from "./UpdateConstant";

const Constants = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Constants</Typography>
          <AddConstant />
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {constants_title.map((item, i) => {
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
                    378264783
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    Berkarar cinema
                  </TableCell>
                  <TableCell align="left">
                    <DeleteConstant />
                  </TableCell>
                  <TableCell align="left">
                    <UpdateConstant />
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

export default Constants;
