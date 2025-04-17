import React from "react";
import Logo from "../../../medias/svg/logo.svg";

function Header() {
    return <>

        <div className="flex items-center justify-between py-10">

            <div className="w-full "> 
                <img src={Logo} alt="logo" className="w-64" />
          </div>
               
         
         

            <div className="w-full h-10 font-roboto text-secondary">
               Commandez votre repas en ligne
            </div>
                
            
        </div>
    
       
    </>
}

export default Header;
