import React from "react";
import Logo from "../../../medias/svg/logo.svg";
import {HomeIcon} from "@heroicons/react/24/outline";
import Bouton from "../../elements/boutons";


function Header() {
    return <>

        <div className="flex items-center justify-between py-10">

            <div className="w-full "> 
                <img src={Logo} alt="logo" className="w-64" />
            </div>
               
         
         

            <div className="w-full text-secondary mr-10">
                <div className="flex items-center justify-end gap-3">
                <HomeIcon className="w-5 h-5" /> 
                <span>Commandez votre repas en ligne</span>
                </div>

                <div className="flex items-center justify-end">
                    <Bouton  className={"bg-primary hover:bg-secondary"}>
                        Inscription
                    </Bouton>
                    <Bouton className={"bg-secondary hover:bg-primary"}>
                        Connexion
                    </Bouton>
                    
                </div>
               
               
            </div>
                
            
        </div>
    
       
    </>
}

export default Header;
