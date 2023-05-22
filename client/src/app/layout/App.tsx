import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/catalog";
import { Container, CssBaseline, Typography, createTheme } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";





function App() {
  const{setBasket}=useStoreContext();
  const[loading,setloading]=useState(true);
//setBasket means the dependency which is needed
useEffect(()=>{
  const buyerId=getCookie('buyerId');
  if(buyerId){
    agent.Basket.get()
    .then(basket=>setBasket(basket))
    .catch(error=>console.log(error))
    .finally(()=>setloading(false));
  }else{
    setloading(false);
  }
},[setBasket])

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
  if(loading) return <LoadingComponent message="Initialising app ..."></LoadingComponent>

  
  return (
    <ThemeProvider theme={theme}>
    {/* use Mui css */}
    <ToastContainer position="bottom-right"hideProgressBar theme="colored"/>
    <CssBaseline />
     <Header darkMode={darkMode} changeMode={changeMode}/>
     {/* container centers your content horizontally */}
     <Container>
      {/* use router to change the web page */}
      <Outlet />
      </Container>
     
    </ThemeProvider>
  );
}



export default App;
