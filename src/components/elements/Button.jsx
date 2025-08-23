import React from "react";

function Button({children, className, color, theme}) {
    let backgroundColor ;
    switch (color) {
        case "primary" : backgroundColor = "bg-primary hover:bg-primary-hover"; 
            break;
        case "secondary" : backgroundColor = "bg-secondary hover:bg-secondary-hover";
            break;
        case "tertiary" : backgroundColor = "bg-tertiary hover:bg-tertiary-hover";
            break;
        default : backgroundColor = "bg-primary hover:bg-primary-hover";    
    }
    switch (theme) {
        case "small":
            return <div>
                        <button 
                            className={` animate px-4 py-2 uppercase shadow-xl text-white text-xs 
                                        font-medium ${className} ${backgroundColor}`} 
                                        
                            >
                                {children}
                        </button>
                    </div>

        case "big":
            return <div>
                        <button 
                            className={` animate px-8 py-4 uppercase shadow-xl text-white text-base 
                                        font-medium ${className} ${backgroundColor}`} 
                                        
                            >
                                {children}
                        </button>
                    </div>
        default:
            return <div>
                        <button 
                            className={` animate px-4 py-3 uppercase shadow-xl text-white text-sm
                                        font-medium ${className} ${backgroundColor}`} 
                                        
                            >
                                {children}
                        </button>
                    </div>
    }


    
}
export default Button;