import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import AddBtn from "./components/layout/AddBtn";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Logo from "./assets/default1.png";
import M from "materialize-css/dist/js/materialize.min.js";
const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="container">
      <Header />
      <br></br>

      <Provider store={store}>
        <Fragment>
          <SearchBar />
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </Fragment>
      </Provider>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default App;
