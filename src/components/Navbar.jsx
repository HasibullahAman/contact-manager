import SearchContact from "./Contacts/SearchContact";
import { PURPLE, BACKGROUND } from "../helpers/color";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">
        <div className="col">
            <div className="navbar-brand">
              ویب آپلیکشن مدریت <span style={{ color: PURPLE }}> مخاطبین</span> {" "}
              <i className="fas fa-id-badge" style={{ color: PURPLE }} />
            </div>
          </div>
          <div className="col ">
            <SearchContact />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
