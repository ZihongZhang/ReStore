import babel from "@babel/core";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography, iconButtonClasses } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
const midLinks =[
    {title:'catalog', path:'/catalog'},
    {title:'about', path:'/about'},
    {title:'contact', path:'/contact'}
]
  

const rightLink =[
    {title:'login', path:'/login'},
    {title:'register', path:'/register'},
    
]
const navStyles={color:'inherit',
typography:'h6',
// Changes when the mouse is placed over it
'&:hover':{
    color:'grey.500'
},
//Changes when the mouse has clicked on it 
'&.active':{
    color:'text.secondary'
},
textDecoration:'none'

}

interface Props{
    darkMode:boolean
    changeMode:()=>void
  
}

export default function Header({darkMode,changeMode}:Props){


    return(
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar sx={{display:'flex',justifyContent:"space-between",alignItems:'center'}}>
                <Box display='flex' alignItems='center'>
                    {/* when clicked the re-store go to the home page */}
                <Typography variant='h6' component={NavLink} to='/'
                sx={navStyles}
                >
                    RE-STORE    
                </Typography>
                {/* switch which can change to the darkMode */}

                <Switch checked={darkMode} onChange={changeMode}/>

                </Box>
                
                <List sx={{display:'flex'}}>
                    {midLinks.map(({title,path})=>(
                        <ListItem component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                    
                </List>

                
                <Box display='flex' alignItems='center'>
                <IconButton size='large'  edge='start' color="inherit" sx={{mr:2}}>
                    {/* icon container */}
                    <Badge badgeContent='4' color="secondary">
                        <ShoppingCart/>
                    </Badge>

                </IconButton>  
                <List sx={{display:'flex'}}>
                    {rightLink.map(({title,path})=>(
                        <ListItem component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                    
                </List>

                </Box>
                
            </Toolbar>
            
        </AppBar>
    )
}