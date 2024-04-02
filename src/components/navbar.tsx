import { AiFillSignal } from "react-icons/ai";
import { PiBankFill } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";
import "../styles/navbar.css";

const NavBar: React.FC = () => {

    return (
        <aside className="sidebar">
          <strong className="sidebar-header">Performa</strong>
          <nav>
            <button>
              <AiFillSignal className="i" /> <span>Home</span>
            </button>
            <button>
              <PiBankFill className="i"/> <span>Client</span>
            </button>
            <button>
              <IoAnalyticsSharp className="i"/> <span>Overview</span>
            </button>
            </nav>
        </aside>
      );
};

export default NavBar;
