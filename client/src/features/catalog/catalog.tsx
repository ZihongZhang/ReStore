import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductLIst";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { error } from "console";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductAsync, fetchProductsAsync, productSelectors } from "./catlogSlice";





export default function Catalog(){
    // const [products,setProducts]=useState<Product[]>([]);
    const products =useAppSelector(productSelectors.selectAll);
    const dispatch= useAppDispatch();
    const{productsLoaded,status}=useAppSelector(state=>state.catlog)


    // useEffect(()=>{
    //   fetch('http://localhost5138/api/products')
    //   .then(Response=>Response.json)
    //   .then(data=>setProducts(data))
    // })
    // const [Loading,setLoading] = useState(true);

    useEffect(()=>{
      if(!productsLoaded)dispatch(fetchProductsAsync());
      // agent.Catlog.list()
      // .then(Response=>setProducts(Response))
      // .catch(error=>console.log(error))
      // .finally(()=>setLoading(false))
    },[productsLoaded,dispatch])

    if(status.includes('pending')) return<LoadingComponent message="Loading products..."/>
    
    return(
        <>
        <ProductList products={products}/>
    
      
      </>)
}