import React from "react";
import Logo from "../../../medias/svg/logo.svg";

function Header() {
    return <>

        <div className="flex items-center justify-between py-4 bg-gray-500">

            <div className="bg-red-500 w-full "> 
                <img src={Logo} alt="logo" className="w-64" />
          </div>
               
         
         

            <div className="bg-green-500 w-full h-10"></div>
                
            
        </div>
    
       
    </>
}

export default Header;
