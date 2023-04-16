import babel from "@babel/core";
import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface Props{
    darkMode:boolean
    changeMode:()=>void
  
}

export default function Header({darkMode,changeMode}:Props){


    return(
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                    <Switch checked={darkMode} onChange={changeMode}/>
                    
                </Typography>
               

            </Toolbar>
            
        </AppBar>
    )
}