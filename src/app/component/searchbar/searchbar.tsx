import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchbar.css";
import {
  faBell,
  faCogs,
  faList,
  faSearch,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

export default function SearchBar() {
  useEffect(() => {
    const profiles = document.querySelector("#profiles");
    const hideMenu = document.querySelector("#hide-menu");
    const logout = document.querySelector("#logout");
    const modal = document.querySelector("#logoutModal");

    const handleProfileClick = (event: Event) => {
      event.stopPropagation();
      hideMenu?.classList.toggle("active");
    };

    const handleClickOutside = (event: Event) => {
      if (
        hideMenu?.classList.contains("active") &&
        !hideMenu?.contains(event.target as Node) &&
        !profiles?.contains(event.target as Node)
      ) {
        hideMenu?.classList.remove("active");
      }
    };

    const handleLogout = (event: Event) => {
      event.stopPropagation();
      modal?.classList.toggle("show");
      hideMenu?.classList.remove("active");
    };

    profiles?.addEventListener("click", handleProfileClick);
    document.addEventListener("click", handleClickOutside);
    logout?.addEventListener("click", handleLogout);

    return () => {
      profiles?.removeEventListener("click", handleProfileClick);
      document.removeEventListener("click", handleClickOutside);
      logout?.removeEventListener("click", handleLogout);
    };
  }, []);

  const closeModal = () => {
    const modal = document.querySelector("#logoutModal");
    modal?.classList.toggle("show");
  };

  const confirmLogout = (event: any) => {
    event.preventDefault();
    signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="container-searchbar">
      <section className="search">
        <input placeholder="search for..." type="text" />
        <button title="search" className="button-search">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "15px", color: "white" }}
          />
        </button>
      </section>
      <section className="info">
        <div className="container-notif">
          <FontAwesomeIcon
            icon={faBell}
            style={{ fontSize: "150%", color: "#979797", position: "relative" }}
          />
          <span className="count">3+</span>
        </div>
        <div className="separator">
          <p>|</p>
        </div>
        <div className="profiles" id="profiles">
          <p>Rubi Henjaya</p>
          <img src="/images/Defaultavatar.png" alt="not source" />

          {/* HIDE MENU START */}
          <div className="hide-menu" id="hide-menu">
            <div className="menu-settings">
              <div className="profile same">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ fontSize: 18, color: "#ccc" }}
                />
                <span className="span-settings">Profile</span>
              </div>
              <div className="settings same">
                <FontAwesomeIcon
                  icon={faCogs}
                  style={{ fontSize: 18, color: "#ccc" }}
                />
                <span>Settings</span>
              </div>
              <div className="activity-log same">
                <FontAwesomeIcon
                  icon={faList}
                  style={{ fontSize: 18, color: "#ccc" }}
                />
                <span>Activity Log</span>
              </div>
            </div>
            <div className="logout" id="logout">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ fontSize: 18, color: "#ccc" }}
              />
              <span>Logout</span>
            </div>
          </div>

          {/* HIDE MENU END */}
        </div>
      </section>

      {/* MODAL START */}

      <div id="logoutModal" className="modal">
        <div className="modal-content">
          <div className="header-modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Do You Want to leave?</h2>
          </div>
          <h3>Select Logout to end your session</h3>
          <div className="btn-logout">
            <div className="buttons">
              <button className="btn cancel" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn logout" onClick={confirmLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL END */}
    </div>
  );
}
