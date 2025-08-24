import React from "react";
import Container from "../../elements/container.jsx";
import { products } from "../../../data/products.js";

function LastProducts() {
    return (
        <Container>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 grid-rows-2 w-full h-70 my-20 uppercase text-white">
                {products.map((product) => (
                    <div key={product.id} className={`relative h-full rounded-md ${product.className}`}>
                        <img src={product.image} alt={product.alt} className="z-0 absolute w-full h-full rounded-md object-cover" />
                        <div className="pl-5 pt-5 z-10 relative">
                            <span className="block text-sm">{product.subtitle}</span>
                            <span className="block text-md font-bold">{product.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default LastProducts;
    