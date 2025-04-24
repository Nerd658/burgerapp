import React from 'react';
import Container from "../elements/container.jsx";

function Heading (props) {
    const {
        children, // children are the text inside the heading
        variant, // variant is for different heading styles (h1, h2, h3, etc.)
        theme, // theme is for different styles (primary, secondary, etc.)
        display, // color
    } = props;

    let font, color 
    switch (theme) {
        case 'secondary':
            font = "font-bold"
            break;
        default:
            font = "tracking-tighter"
    }

    switch (display) {
        case 'gray':
            color = "text-gray-500"
            break;
        case 'primary':
            color = "text-primary"
            break;
        default:
            color = "text-secondary"
    }




    const classDefault = "uppercase mt-5"

    switch (variant) {
        case 'h3':
            return (
                <div className="flex justify-center items-center my-5">
                    <h3 className={`text-3xl ${classDefault} ${font} ${color}`}>
                        {children}
                    </h3>
                </div>
            )
     
    default:
        return (
            <div className="flex items-center justify-center my-5">
                <h2 className={` ${theme === "secondary" ? "text-5xl" : "text-3xl"} ${classDefault} ${font} ${color}`}>
                    {children}
                </h2>
            </div>
        )
    }
    
}
export default Heading;