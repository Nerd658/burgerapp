import React from "react";
import Container from "../../elements/container.jsx";
import Header from "./Header.jsx";
import burger from "../../../medias/images/image_burger.png";
import Bouton from "../../elements/boutons.jsx";
const HeroTop = () => {
    return (
        <>
            <div className="bg-primary w-full h-screen">
              <div className="bg-repeat w-full h-full bg-primary"> 
                <Container>
                    <Header />
                    <div className="bg-green-500 w-full  flex items-center justify-center px-10">
                       <div className="w-2/3 h-full uppercase">
                          <h1 className="font-bold font-alfa text-xl"> C'est le moment de gouter au bon gout des burgers</h1>
                          <h2 className=""> 
                            <span className="font-bold font-alfa text-8xl block">Burger</span> 
                            <span className="font-bold font-alfa text-6xl ">House</span> 
                            <span className=" ml-5 font-bold font-alfa text-4xl ">Clcik&Collect</span> 
                          </h2>
                      <Bouton className={"mt-10 bg-secondary"}>Commander</Bouton>     
                       </div>
                       <div className=" w-1/3 h-full">
                       <img src={burger} alt="burger" className="" />
                       </div>
                    </div>
                </Container>
              </div>
            </div>
        </>
    )
}   

export default HeroTop;