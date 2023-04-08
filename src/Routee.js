import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/Search/App";
import { ChakraProvider, extendTheme, ColorModeScript, Switch } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";
import { persistor, store } from "./redux/store";
import theme from "./theme";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MergeSearch from "./Pages/Search/MergeSearch";

const Routee = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MergeSearch/>}></Route>
        </Routes>
    </Router>
  );
};
export default Routee