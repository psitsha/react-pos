import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import axios from "axios"

function POSpage() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const result = await axios.get('products');
        setProducts(await result.data);
      }
    
      useEffect(() => {
        fetchProducts();
      },[]);

      useEffect(() => {
        console.log(products);
      },[products]);

    return (
        <MainLayout>
            POSpage
        </MainLayout>
    )
}

export default POSpage