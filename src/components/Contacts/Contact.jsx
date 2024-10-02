import {
  CURRENTLINE,
  CYAN,
  ORANGE,
  PINK,
  PURPLE,
  RED,
} from "../../helpers/color";

const Contact = ({ contacts }) => {
  return (
    <div className="col-md-6">
      <div className="card my-2" style={{ backgroundColor: CURRENTLINE }}>
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src={contacts.photo}
                alt={contacts.fullName}
                style={{ border: "1px solid ${PURPLE}" }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7  col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و تخلص: <span className="fw-bold">{contacts.fullName}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  شماره تماس: <span className="fw-bold">{contacts.mobail}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  ایمیل: <span className="fw-bold">{contacts.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye" />
              </button>
              <button className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pen" />
              </button>
              <button className="btn my-1" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
