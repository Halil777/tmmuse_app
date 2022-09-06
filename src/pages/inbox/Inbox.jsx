import React from "react";
import Empty from "../../components/empty/Empty";
import Navbar from "../../components/navbar/Navbar";

const Inbox = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Empty />
      </div>
    </div>
  );
};

export default Inbox;
