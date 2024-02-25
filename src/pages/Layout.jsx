import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { Search } from "../components/Search";

export const Layout = () => {
  return (
    <>
      <div id="navbar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
