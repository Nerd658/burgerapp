import React from "react";
import Container from "../../elements/container.jsx";
import Image1 from "../../../medias/images/LastProduct/LastProducts-1.jpg";
import Image2 from "../../../medias/images/LastProduct/LastProducts-2.jpg";
import Image3 from "../../../medias/images/LastProduct/LastProducts-3.jpg";

const products = [
    {
        id: 1,
        image: Image1,
        alt: "Burger le plus Populaire",
        subtitle: "Essayer le aujourd'hui",
        title: "Burger le plus Populaire",
        className: "row-span-2",
    },
    {
        id: 2,
        image: Image2,
        alt: "Plus de gouts, plus de plaisir",
        subtitle: "Essayer le aujourd'hui",
        title: (
            <>
                Plus de gouts<br/>plus de plaisir
            </>
        ),
        className: "",
    },
    {
        id: 3,
        image: Image3,
        alt: "Frais et Pimenté",
        subtitle: "Essayer le aujourd'hui",
        title: "Frais et Pimenté",
        className: "",
    }
];

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
    