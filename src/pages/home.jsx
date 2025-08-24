import React from "react";	
import HeroTop from "../components/marketing/pageSections/heroTop.jsx";
import LastProducts from "../components/marketing/pageSections/LastProducts.jsx";
import Product from "../components/marketing/pageSections/Product.jsx";
import burgerImage from "../medias/images/image_burger.png";

const  HomePage = () => {
    return (
        <> 
            <HeroTop
                mainTitle="C'est le moment de gouter au bon gout des burgers"
                burgerName="Burger"
                houseName="House"
                tagline="Click<span class='text-red-500'>&</span>Collect"
                buttonText="Creer mon compte"
                price="5.49€"
                priceText="seulement"
                imageSrc={burgerImage}
            />
            <LastProducts />
            <Product
                title="Des plats délicieux et sains à portée de main"
                heading1="Découvrez nos nouveautés"
                heading2="Plus de saveurs pour vous"
            />
        </>
    ) 
}

export default HomePage;