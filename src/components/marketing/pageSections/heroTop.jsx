import React from "react";
import Container from "../../elements/container.jsx";
import Header from "./Header.jsx";
const HeroTop = () => {
    return (
        <>
            <div className="bg-primary w-full h-screen">
              <div className="bg-repeat w-full h-full bg-primary"> 
                <Container>
                    <Header />
                </Container>
              </div>
            </div>
        </>
    )
}   

export default HeroTop;