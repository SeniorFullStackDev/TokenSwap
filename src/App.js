import React from "react";
import { Provider } from 'react-redux'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Web3Provider from 'web3-react'
import config from "./components/common/config";
import "./App.css";
import TradePanel from "./components/tradeExecution/tradePanel";
import { MetaMask, Infura } from "./connectors";
import Web3 from 'web3';
import NotFound from "./components/notFound";
import store from './state';

const theme = createMuiTheme({
  palette: {
    primary: { main: config.defaultTextColor },
    secondary: { main: config.secondaryTextColor },
    background: {
      // paper: config.defaultBackgroundColor,
      // default: config.defaultBackgroundColor,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },

    fontFamily: config.fontFamily,
  },
});

function App() {
  return (
    <React.Fragment>
      <div style={{ background: config.bodyBackgroundColor }}>
        <ThemeProvider theme={theme}>
          <link
            href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans|Inconsolata|Orbitron|Righteous|Source+Code+Pro&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <main
            className="container"
            style={{ background: config.bodyBackgroundColor }}
          >
            <div className="App">
              <Web3Provider
                connectors={{ MetaMask }}
                libraryName={'web3.js'}
                web3Api={Web3}
              >
                <Provider store={store}>
                  <TradePanel />
                </Provider>
              </Web3Provider>
            </div>
          </main>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
