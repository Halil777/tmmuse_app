import React from "react";
import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        p={2}
        pl={5}
        pr={5}
        alignItems={"center"}
        style={{ background: "#fff" }}
      >
        <Stack>
          <Searc>
            <div>
              <input type="text" placeholder="Search ..." />
            </div>
            <SearchIconn>
              <SearchIcon />
            </SearchIconn>
          </Searc>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <IconButton>
            <LogoutIcon style={{ color: "#31456A", cursor: "pointer" }} />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlinedIcon
              style={{ color: "#31456A", cursor: "pointer" }}
            />
          </IconButton>
          <PersonIcon
            style={{
              background:
                "linear-gradient(134.99deg, #7C057B 0%, #CD2791 77.02%)",
              color: "#fff",
              borderRadius: "50px",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          />

          <Stack spacing={-1} direction={"column"}>
            <Typography
              style={{
                color: "#31456a",
                fontFamily: "inter",
                fontWeight: "600",
              }}
            >
              Jemal
            </Typography>
            <Typography
              style={{
                color: "#31456a",
                fontFamily: "inter",
                fontWeight: "600",
              }}
            >
              TmMuse adminstrator
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export const Searc = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 380px;
    input {
      border: 0.7px solid #adb5bd;
      box-shadow: 0px 0px 10px rgba(3, 3, 3, 0.15);
      background-color: transparent;
      border-radius: 6px;
      width: 318px;
      padding: 0 18px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      outline: none;
      border-color: #dce6f1;
      vertical-align: text-top;
      letter-spacing: 1.7px;
    }
  }
`;
export const SearchIconn = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 7px;
  left: 2px;
  color: #adb5bd;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s;
`;

export default Navbar;
