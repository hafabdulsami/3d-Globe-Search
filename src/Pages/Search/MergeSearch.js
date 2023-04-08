import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, connect } from "react-redux";
import { persistor, store } from "../../redux/store";
import theme from "../../theme";
const Routee = () => {
  return (
   
		<PersistGate
			loading={<div>Loading...</div>}
			persistor={persistor}
		>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</PersistGate>

  )
}

export default Routee