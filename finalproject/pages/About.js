import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Image from "next/image.js";

const About = () => {
  console.log("here?");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-8">
           
            <h1>About us</h1>
            <div>
              <text>
                This project is to show our skills and knowledge in Next.js for
                the subject Transactionla web application
              </text>
              <text>The team is formed by:</text>
            </div>
            <div>
              <text>Kavya Katariya</text>
            </div>
            <div>
              <text>Roberto Benitez</text>
            </div>
          </div>
          <div className="col-8">
          <Image
              src="/logo2.png"
              alt="logo"
              width={300}
              height={150}
            />
          </div>
        </div>
        <div className="row">
        <Footer />
        </div>
      </div>
    </>
  );
};
export default About;
