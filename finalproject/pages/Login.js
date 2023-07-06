import { useState } from "react";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function Login() {
        if (email == 'vanier@can.com' && password =='123') {
            alert('Login succes.')
        }else{
            alert('Wrong email or password.')
        }
      }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <form className="row">
            <div className="col-4"></div>
          <div className="col-4">
            <h1>Login</h1>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" onChange={setEmail} />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" onChange={setPassword}/>
            <button
              type="submit"
              className="btn"
              onClick={Login}
              style={{ margin: 20, backgroundColor: "#264653", color: "white" }}
            >
              Login
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