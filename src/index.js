import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./Pages/Search/MergeSearch";
import App from './Routee'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";
import { persistor, store } from "./redux/store";

import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
	<App />
</Provider>
);