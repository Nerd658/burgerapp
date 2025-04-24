import React, { Children } from "react";
import HeadingTitle from "../../elements/HeadingTitle.jsx";
import Container from "../../elements/container.jsx";
import Heading from "../../elements/Heading.jsx";

function Product() {
    return (
        <Container> 
         
            <HeadingTitle >
                Des plats délicieux et sains à portée de main
            </HeadingTitle>
            <Heading variant="h3" theme="secondary" display="gray"> 
                Hello World
            </Heading>
            <Heading variant="" theme="secondary" display=""> 
                Hello World
            </Heading>
        </Container>
    )
}

export default Product