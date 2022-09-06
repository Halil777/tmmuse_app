import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Button,
  IconButton,
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
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { users_title } from "../../components/data/title_names/Title.mjs";

const Users = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Users</Typography>
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {users_title.map((item, i) => {
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
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    Gayypov Halil / <br />
                    +99363430338
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

export default Users;
