import React from "react";

function Container({children}) {
    return <>
            <div className="h-full max-w-6xl m-auto">
                {children}
            </div>
    </>
}

export default Container;