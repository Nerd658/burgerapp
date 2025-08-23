import React from "react";
import HeadingTitle from "../../elements/HeadingTitle.jsx";
import Container from "../../elements/container.jsx";
import Heading from "../../elements/Heading.jsx";

function Product({ title, heading1, heading2 }) {
    return (
        <Container> 
            <HeadingTitle>
                {title}
            </HeadingTitle>
            <Heading variant="h3" theme="secondary" display="gray"> 
                {heading1}
            </Heading>
            <Heading variant="" theme="secondary" display=""> 
                {heading2}
            </Heading>
        </Container>
    )
}

export default Product;