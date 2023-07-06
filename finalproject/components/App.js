import Banner from "./Banner.js";
import CarList from "./CarList.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Search from "./Search.js";
// import * as SQLite from "expo-sqlite";

const App = () => {
  // const db = SQLite.openDatabase("vanier.db");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="row">
            <Banner />
          </div>
        </div>
        <div className="row">
          <div>
            <Search />
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
