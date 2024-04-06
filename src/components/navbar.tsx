import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { PiBankFill } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <strong className="sidebar-header">Performa</strong>
      <nav>
        <button>
          <Link to="/" className="link-button">
            <AiFillSignal className="i" /> <span>Home</span>
          </Link>
        </button>
        <button>
          <Link to="/" className="link-button">
            <PiBankFill className="i" /> <span>Client</span>
          </Link>
        </button>
        <button>
          <Link to="/" className="link-button">
            <IoAnalyticsSharp className="i" /> <span>Overview</span>
          </Link>
        </button>
        <button className="login-button">
          <Link to="/" className="link-button">
            <AiOutlineLogin className="i" />
            <span>Get Started</span>
          </Link>
        </button>
      </nav>
    </aside>
  );
};

export default NavBar;
