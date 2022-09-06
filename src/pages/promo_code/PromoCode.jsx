import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Button,
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
import { promo_code_title } from "../../components/data/title_names/Title.mjs";
import AddPromoCode from "./AddPromoCode";
import UpdatePromoCode from "./UpdatePromoCode";
import DeletePromoCode from "./DeletePromoCode";

const PromoCode = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Promo Code</Typography>
          <AddPromoCode />
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {promo_code_title.map((item, i) => {
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
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    Active
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    <Button variant={"contained"}>Set passive</Button>
                  </TableCell>
                  <TableCell align="left">
                    <DeletePromoCode />
                  </TableCell>
                  <TableCell align="left">
                    <UpdatePromoCode />
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

export default PromoCode;
