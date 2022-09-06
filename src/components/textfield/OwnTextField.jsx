import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@mui/material";

const OwnTextField = (props) => {
  return (
    <>
      <CssTextField
        id="standard-basic"
        label={props.label}
        fullWidth
        type={props.type}
        value={props.value}
        // onChange={(e) => setFullname(e.target.value)}
        variant="outlined"
        endIcon={props.endIcon}
        inputProps={{
          style: {
            fontFamily: "montserrat",
            color: "#31456A",
          },
        }}
      />
    </>
  );
};

export default OwnTextField;

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#31456A",
      fontFamily: "montserrat",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#31456A",
      fontFamily: "montserrat",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#31456A",
        fontFamily: "montserrat",
      },
      "&:hover fieldset": {
        borderColor: "#31456A",
        fontFamily: "montserrat",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#31456A",
        fontFamily: "montserrat",
      },
    },
  },
})(TextField);
