import React, { useContext } from "react";
import { UserContext } from "./userContext";

const NavbarUser = () => {
  const { user } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (!localStorage.getItem("token")) {
      alert("You have been logged out.");
      window.location.reload();
    }
  };
  return (
    <div>
      <nav className="navbar-logged-in">
        <p>Welcome, {user ? user : "Guest"}!</p>
        <button type="button">Your Profile</button>
        <button id="logout-button" onClick={() => handleLogout()}>
          Log out
        </button>
      </nav>
    </div>
  );
};

export default NavbarUser;
