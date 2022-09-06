import React from "react";
import "./login.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { withStyles } from "@material-ui/core";

const Login = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* _______________________________________________________________________________________________________________________________ */}
          {/* ________________________________________________________Left side of Login page________________________________________________ */}
          {/* _______________________________________________________________________________________________________________________________ */}
          <Grid item xs={6} className={"left_side_login"}>
            <Stack pl={10} pt={20} spacing={5}>
              <Stack direction={"row"}>
                <img
                  width={"100px"}
                  src="/images/loginM.svg"
                  alt="Login emblame"
                />
                <Stack direction={"column"} spacing={-1} pt={2} pl={3}>
                  <Typography
                    style={{
                      color: "#fff",
                      letterSpacing: "2px",
                      fontFamily: "montserrat",
                      fontSize: "32px",
                    }}
                  >
                    TmMuse
                  </Typography>
                  <Typography
                    pl={3}
                    style={{
                      color: "#E3EDF7",
                      letterSpacing: "2px",
                      fontFamily: "montserrat",
                      fontSize: "24px",
                    }}
                  >
                    Save your time!
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  style={{
                    color: "#fff",
                    letterSpacing: "2px",
                    wordSpacing: "3px",
                    fontFamily: "montserrat",
                    fontSize: "22px",
                  }}
                >
                  TmMuse - is a portal for provision of <br /> information
                  services in the field of <br />
                  culture, entertainment and leisure.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* _______________________________________________________________________________________________________________________________ */}
          {/* ________________________________________________________Right side of Login page________________________________________________ */}
          {/* _______________________________________________________________________________________________________________________________ */}
          <Grid item xs={6} pr={22} className={"right_side_login"}>
            <Stack pt={20} spacing={4}>
              <Stack direction={"column"} spacing={0}>
                <Stack direction={"row"} justifyContent={"center"}>
                  <PersonIcon
                    style={{
                      background:
                        "linear-gradient(134.99deg, #7C057B 0%, #CD2791 77.02%)",
                      color: "#fff",
                      borderRadius: "50px",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </Stack>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Typography
                    style={{
                      color: "#31456A",
                      fontWeight: "600",
                      letterSpacing: "2px",
                      wordSpacing: "3px",
                      fontFamily: "montserrat",
                      fontSize: "18px",
                    }}
                  >
                    TmMuse Admin
                  </Typography>
                </Stack>
              </Stack>
              <CssTextField
                label="Username"
                className="username"
                name="username"
                type="text"
                autoComplete="current-password"
                margin="normal"
                inputProps={{
                  style: { fontFamily: "nunito", color: "#31456A" },
                }}
              />
              <CssTextField2
                label="Password"
                className="password"
                name="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                inputProps={{
                  style: { fontFamily: "nunito", color: "#31456A" },
                }}
              />
              <Button
                variant="contained"
                style={{
                  background:
                    "linear-gradient(134.99deg, #7C057B 0%, #CD2791 77.02%)",
                  textTransform: "none",
                  fontFamily: "montserrat",
                  color: "#fff",
                  fontSize: "20px",
                  lineHeight: "33px",
                }}
              >
                Login
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#CD2791",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#CD2791",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#CD2791",
      },
      "&:hover fieldset": {
        borderColor: "#CD2791",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#CD2791",
      },
    },
  },
})(TextField);

const CssTextField2 = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#31456A",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#31456A",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#31456A",
      },
      "&:hover fieldset": {
        borderColor: "#31456A",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#31456A",
      },
    },
  },
})(TextField);
