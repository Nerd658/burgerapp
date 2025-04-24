import React from "react";	
import HeroTop from "../components/marketing/pageSections/heroTop.jsx";
import LastProducts from "../components/marketing/pageSections/lastProducts.jsx";
import Product from "../components/marketing/pageSections/Product.jsx";

const  HomePage = () => {
    return (
        <> 
            <HeroTop />
            <LastProducts />
            <Product >
            </Product>
             
        </>
    ) 
}

export default HomePage;