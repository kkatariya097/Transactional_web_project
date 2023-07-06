import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const router = useRouter()
    const habdleRegister = () => {

    }

  return (
    <div className="container-fluid" style={{backgroundColor: "#264653"}}>
    <div className="row" >
        <div className="col-1">
        </div>
        <div className="col-1">
            <img
            src="./logo3.png"
            alt="Logo"
            style={{ width: "auto", height: 80}}/>
        </div>
        <div className="col-8">
            <nav className="navbar navbar-expand-lg" style={{margin:10, fontSize: 20}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li className="nav-item" style={{margin: 15}}>
                         <Link href="/">Home</Link>
                        {/* <a classNameS="nav-link active" aria-current="page" href="#" style={{color: "white"}}>Home</a> */}
                    </li>
                    <li className="nav-item" style={{margin: 15}}>
                        <Link href="/About">About us</Link>
                        {/* <a className="nav-link active" aria-current="page" href="/About.js" style={{color: "white"}}>About</a> */}
                    </li>
                    <li className="nav-item" style={{margin: 15}}>
                        <Link href="/ContactUs">Contact us</Link>
                        {/* <a className="nav-link active" aria-current="page" href="/ContactUs" style={{color: "white"}}>Contact</a> */}
                    </li>
                </ul>
            </nav>
        </div>
        <div className="col-2" style={{alignItems: "flex-end"}}>
            <div className="btn-group" role="group" style={{marginTop: 20}}>
                <button type="button" className="btn" onClick={() => router.push('/Login')} style={{backgroundColor: "#264653", color: "white"}}>Log in</button>
                <button type="button" className="btn" onClick={() => router.push('/Register')} style={{backgroundColor: "white", color: "#264653"}}>Register</button>
           </div>
        </div>
    </div>
    </div>
  );
};
export default Header;
