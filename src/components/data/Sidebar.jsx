import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const Sidebar = () => {
  return <></>;
};

export default Sidebar;

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: <TrendingUpIcon />,
    link: "/",
  },
  {
    title: "Profiles",
    icon: <RecentActorsOutlinedIcon />,
    link: "/profile",
  },
  {
    title: "Category",
    icon: <PeopleAltOutlinedIcon />,
    link: "/category",
  },
  {
    title: "Banner",
    icon: <RemoveRedEyeOutlinedIcon />,
    link: "/banner",
  },
  {
    title: "Ads",
    icon: <AdminPanelSettingsOutlinedIcon />,
    link: "/ads",
  },
  {
    title: "Inbox",
    icon: <RoomOutlinedIcon />,
    link: "/inbox",
  },
  {
    title: "Post",
    icon: <LocalShippingOutlinedIcon />,
    link: "/post",
  },
  {
    title: "Certificate",
    icon: <HelpOutlineOutlinedIcon />,
    link: "/certificate",
  },
  {
    title: "Promo Code",
    icon: <GridViewOutlinedIcon />,
    link: "/promo_code",
  },

  {
    title: "Users",
    icon: <CancelOutlinedIcon />,
    link: "/users",
  },
  {
    title: "Push",
    icon: <LogoutIcon />,
    link: "/push",
  },
  {
    title: "Pop-up",
    icon: <LogoutIcon />,
    link: "/pop_up",
  },
  {
    title: "Constants",
    icon: <LogoutIcon />,
    link: "/constants",
  },
  {
    title: "Interests",
    icon: <LogoutIcon />,
    link: "/interests",
  },
  {
    title: "TmMuse Card",
    icon: <LogoutIcon />,
    link: "/tm_muse_card",
  },
];
