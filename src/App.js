import React from "react";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import AnaliticPage from "./pages/analitic_page/AnaliticPage";
import Banner from "./pages/banner/Banner";
import Category from "./pages/category/Category";
import Certificate from "./pages/certificate/Certificate";
import Constants from "./pages/constants/Constants";
import Inbox from "./pages/inbox/Inbox";
import Interests from "./pages/interests/Interests";
import PopUp from "./pages/pop_up/PopUp";
import Post from "./pages/post/Post";
import PromoCode from "./pages/promo_code/PromoCode";
import Push from "./pages/push/Push";
import TmMuseCard from "./pages/tm_muse_card/TmMuseCard";
import Users from "./pages/users/Users";
import Ads from "./pages/ads/Ads";
import Sidebar from "./components/data/sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/analitic_page" element={<AnaliticPage />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/category" element={<Category />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/constants" element={<Constants />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/pop_up" element={<PopUp />} />
            <Route path="/post" element={<Post />} />
            <Route path="/promo_code" element={<PromoCode />} />
            <Route path="/push" element={<Push />} />
            <Route path="/tm_muse_card" element={<TmMuseCard />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
