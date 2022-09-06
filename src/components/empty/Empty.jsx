import React from "react";
import { Stack } from "@mui/system";
import Typical from "react-typical";

const Empty = () => {
  return (
    <div>
      <Stack
        width={"100%"}
        height={"70vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src="/images/empty.svg" alt="Empty" width={"120px"} />
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={["This page is empty ...", 2000, "No Information !!!", 2000]}
        />
      </Stack>
    </div>
  );
};

export default Empty;
