import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductLIst";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { error } from "console";





export default function Catalog(){
    const [products,setProducts]=useState<Product[]>([]);
    // useEffect(()=>{
    //   fetch('http://localhost5138/api/products')
    //   .then(Response=>Response.json)
    //   .then(data=>setProducts(data))
    // })
    const [Loading,setLoading] = useState(true);

    useEffect(()=>{
      agent.Catlog.list()
      .then(Response=>setProducts(Response))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
    },[])
    if(Loading) return<LoadingComponent message="Loading products..."/>
    
    return(
        <>
        <ProductList products={products}/>
    
      
      </>)
}