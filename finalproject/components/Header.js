const Header = () => {
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
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" style={{color: "white"}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="About.html" style={{color: "white"}}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="Contact.html" style={{color: "white"}}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="col-2" style={{alignItems: "flex-end"}}>
            <div className="btn-group" role="group" style={{marginTop: 20}}>
                <button type="button" className="btn" style={{backgroundColor: "#264653", color: "white"}}>Log in</button>
                <button type="button" className="btn" style={{backgroundColor: "white", color: "#264653"}}>Register</button>
           </div>
        </div>
    </div>
    </div>
  );
};
export default Header;
