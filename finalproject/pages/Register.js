import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const ContactUs = () => {

    const saveUser = () => {
        alert('User saved successfully.')
      }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <form className="row">
            <div className="col-4"></div>
          <div className="col-4">
            <h1>Register</h1>
            <label htmlFor="firstname" className="form-label">
              First name
            </label>
            <input type="text" className="form-control" id="firstname" />
            <label htmlFor="lastname" className="form-label">
              Last name
            </label>
            <input type="text" className="form-control" id="lastname" />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
            <button
              type="submit"
              className="btn"
              onClick={saveUser}
              style={{ margin: 20, backgroundColor: "#264653", color: "white" }}
            >
              Save
            </button>
          </div>
          <div className="col-4"></div>
        </form>
        <div className="row">
        <Footer />
        </div>
      </div>
      </div>
    </>
  );
};
export default ContactUs;