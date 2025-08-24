import React from 'react';
import Image1 from "../medias/images/LastProduct/LastProducts-1.jpg";
import Image2 from "../medias/images/LastProduct/LastProducts-2.jpg";
import Image3 from "../medias/images/LastProduct/LastProducts-3.jpg";

export const products = [
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
