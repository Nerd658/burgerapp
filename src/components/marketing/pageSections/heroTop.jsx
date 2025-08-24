import React from "react";
import Container from "../../elements/container.jsx";
import Header from "./Header.jsx";
import Button from "../../elements/Button.jsx";

const HeroTop = ({
    mainTitle,
    burgerName,
    houseName,
    tagline,
    buttonText,
    price,
    priceText,
    imageSrc,
}) => {
    return (
        <div className="bg-primary w-full pb-40">
            <div className="bg-repeat w-full h-full bg-primary">
                <Container>
                    <Header />
                    <div className="mt-20 w-full relative">
                        <img src={imageSrc} alt="burger" className="absolute right-0 w-4/12 -top-20 mr-15" />
                        <div className="absolute w-50 h-50 bg-red-600 right-75 rounded-full -bottom-40 p-2">
                            <div className="relative border-dashed h-full w-full rounded-full bg-yellow border-3 text-white">
                                <div className="absolute bottom-17 left-1 text-center font-bold text-2xl">
                                    {price} {priceText}
                                </div>
                            </div>
                        </div>
                        <div className="relative text-secondary uppercase">
                            <h1 className="font-bold text-xl">{mainTitle}</h1>
                            <h2 className="">
                                <span className="font-bold font-alfa text-8xl block">{burgerName}</span>
                                <span className="font-bold font-alfa text-6xl">{houseName}</span>
                                <span className="ml-5 font-bold text-4xl" dangerouslySetInnerHTML={{ __html: tagline }}></span>
                            </h2>
                        </div>
                    </div>
                    <Button className="rounded-md mt-10 text-white font-bold font-alfa text-xl" color="secondary" theme="base">
                        {buttonText}
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default HeroTop;