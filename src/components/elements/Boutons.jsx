import React from "react";

function Bouton({children, className}) {
    return <div>
        <button 
        className={`traking-widest bg-primary  px-5 py-3 mr-2 
                    mt-2 uppercase shadow-xl text-white border-none text-sm 
                    font-medium ${className}`} 
        >
            {children}
        </button>
    </div>
}
 
export default Bouton;  