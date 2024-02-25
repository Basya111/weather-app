import { Outlet } from "react-router-dom";
import { Search } from "../components/Search";

export const Layout = () => {
  return (
    <>
      <div id="navbar">
        <Search />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
