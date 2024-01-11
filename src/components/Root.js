import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "../App.css";

export default function Root() {
    return (
        <div className="appContainer">
            <NavBar />
            <Outlet />
        </div>
    );
};