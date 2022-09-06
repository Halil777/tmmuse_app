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
import { post_title } from "../../components/data/title_names/Title.mjs";
import DeletePost from "./DeletePost";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";

const Post = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Post</Typography>
          <AddPost />
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {post_title.map((item, i) => {
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
                    2
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    50%
                  </TableCell>
                  <TableCell align="left">
                    <DeletePost />
                  </TableCell>
                  <TableCell align="left">
                    <UpdatePost />
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

export default Post;
