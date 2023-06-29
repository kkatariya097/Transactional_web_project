import Banner from "./Banner.js";
import CarList from "./CarList.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Search from "./Search.js";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-4">
            <Search />
          </div>
          <div className="col-8">
            <Banner />
          </div>
        </div>
        <div className="row">
          <div>
            <CarList />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
