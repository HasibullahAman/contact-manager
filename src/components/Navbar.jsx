import SearchContact from "./contact/SearchContact";
import { PURPLE, BACKGROUND } from "../helpers/color";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
      <div className="container">
        <div className="row w-100">
        <div className="col ">
            <SearchContact />
          </div>
          <div className="col">
            ویب آپلیکشن مدریت <span style={{ color: "purple" }}> مخاطبین</span>
            <i className="fas fa-id-badge" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
