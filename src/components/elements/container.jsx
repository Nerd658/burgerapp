import React from "react";

function Container({children}) {
    return <>
            <div className="bg-gray-50 h-full max-w-4xl m-auto">
                {children}
            </div>
    </>
}

export default Container;