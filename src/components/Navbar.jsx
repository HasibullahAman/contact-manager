const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <i className="fas fa-id-badge" />
            به مدریت آپلیکشن <span style={{ color: "purple" }}> مخاطبین</span>
          </div>
          <div className="col ">
            <div className="input-group mx-2 w-75" dir="ltr">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ backgroundColor: "purple" }}
              >
                <i className="fas fa-search" />
              </span>
              <input
                dir="rtl"
                type="text"
                style={{ backgroundColor: "gray", borderColor: "purple" }}
                className="form-control"
                placeholder="جستوجوی مخاطبین"
                aria-label="search"
                aria-describedby="basic-addon1"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
