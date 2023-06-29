const Footer = () => {
    return (
      <div className="container text-center" style={{backgroundColor: "#2a9d8f"}}>
      <div className="row">
        <div className="col-4" style={{color: "white"}}>
            <h5 >Vanier rental cars</h5>
            <p style={{color: "black", textAlign: "left"}}>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
            </p>
            <p>
                (438) 772-8240
            </p>
            <p>
                vanier@rentalcars.com
            </p>
        </div>
        <div className="col-4" style={{color: "white"}}>
            <h5>Working hours</h5>
            <p>
                Mon-Fri: 08:00AM - 10:00PM
            </p>
            <p>
                Sat:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00AM - 19:00PM
            </p>
            <p>
                Sun:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00AM - 18:00PM
            </p>
        </div>
        <div className="col-4" style={{color: "white"}}>
            <h5>Social media</h5>    
            <a href="http://www.facebook.com/" style={{color: "white"}}>Facebook</a><p></p>
            <a href="http://www.twitter.com/" style={{color: "white"}}>Twitter</a>
        </div>
      </div>
      </div>
    );
  };
  export default Footer;