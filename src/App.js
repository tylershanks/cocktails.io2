import React from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import FullTable from "./components/FullTable";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/pages/Home'
import { createTheme, ThemeProvider } from '@material-ui/core'
import MainIngredients from "./components/MainIngredients";

const theme = createTheme({
  palette: {
    primary: {
      main: '#5bccf6'
    },
    secondary: {
      main: '#fcde67',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Router>
        <TopBar />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
        <MainIngredients />
      </Router>
    </>
    </ThemeProvider>
  );
}

export default App;