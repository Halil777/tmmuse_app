import { Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./profile.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { profile_title } from "../../components/data/title_names/Title.mjs";
import Add_profile from "./Add_profile";
import DeleteProfile from "./DeleteProfile";
import Update_profile from "./Update_profile";

const Profile = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography id="title_name">Profiles</Typography>
          <Add_profile />
        </Stack>
        <Stack mt={3}>
          <FormControl id="select">
            <InputLabel id="demo-simple-select-label">
              Select category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select category"
              onChange={handleChange}
            >
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack mt={2}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ background: "#31456A" }}>
                  {profile_title.map((item, i) => {
                    return (
                      <TableCell
                        align="left"
                        style={{
                          color: "#fff",
                          fontFamily: "roboto",
                          fontSize: "17px",
                        }}
                      >
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
                    Kinoteatr Berkarar
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    Movie
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    on
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    off
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    777
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    765
                  </TableCell>
                  <TableCell align="left" style={{ color: "#31456A" }}>
                    675
                  </TableCell>
                  <TableCell align="left">
                    <DeleteProfile />
                  </TableCell>
                  <TableCell align="left">
                    <Update_profile />
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

export default Profile;
