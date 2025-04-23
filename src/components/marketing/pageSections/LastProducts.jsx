import React from "react";
import Container from "../../elements/container.jsx";
import Image1 from "../../../medias/images/LastProduct/LastProducts-1.jpg";
import Image2 from "../../../medias/images/LastProduct/LastProducts-2.jpg";
import Image3 from "../../../medias/images/LastProduct/LastProducts-3.jpg";

function LastProducts() {
    return (
        <Container >
            
          <Elements />
        
        </Container>

    )
}




export function Elements() {
    return (
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 grid-rows-2  w-full h-70 my-20 uppercase text-white ">
            <div className="relative h-full bg-red-500 row-span-2 rounded-md">
                <img src={Image1} alt="burger" className="z-0 absolute w-full h-full rounded-md object-cover" />
                <div className="pl-5 pt-5 z-10 relative ">
                    <span className="block text-sm ">Essayer le aujord'hui</span>
                    <span className="block text-md font-bold">Burger le plus Populaire</span>
                </div>
            </div>

            <div className="relative h-full bg-green-500  rounded-md"> 
                <img src={Image2} alt="burger" className="z-0 absolute w-full h-full rounded-md object-cover" />
                    <div className="pl-5 pt-5 z-10 relative ">
                        <span  className="block text-sm ">Essayer le aujord'hui</span>
                        <span className="block text-md font-bold">Plus de gouts</span>
                        <span className="block text-md font-bold">plus de plaisir</span>
                   </div>

            </div>

            <div className="relative h-full bg-blue-500 rounded-md "> 
                <img src={Image3} alt="burger" className=" z-0 rounded-md absolute w-full h-full object-cover" />
               <div className="pl-5 pt-5 z-10 relative ">
                    <span className="block text-md ">Essayer le aujord'hui</span> 
                    <span className="block text-md font-bold">Frais et Pimenté</span>

               </div>
            </div>
        </div>
    )
}


export default LastProducts;
    