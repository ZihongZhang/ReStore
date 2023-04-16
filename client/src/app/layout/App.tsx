import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catlog/catlog";
import { Container, CssBaseline, Typography, createTheme } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";





function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType =darkMode?'dark':'light'
  const theme =createTheme({
    palette:{
      mode:paletteType,
      background:{
        default:paletteType==='light'?'#eaeaea':'#121212'
      }
    }
  })
  function  changeMode(){
    setDarkMode(!darkMode)
  }

  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
     <Header darkMode={darkMode} changeMode={changeMode}/>
     <Container>
      <Catalog />
      </Container>
     
    </ThemeProvider>
  );
}



export default App;
