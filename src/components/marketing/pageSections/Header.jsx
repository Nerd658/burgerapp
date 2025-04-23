import React from "react";
import Logo from "../../../medias/svg/logo.svg";
import {HomeIcon} from "@heroicons/react/24/outline";
import Bouton from "../../elements/boutons";


function Header() {
    return <>

        <div className="flex items-center justify-between py-10 relative z-10">

            <div className="w-full "> 
                <img src={Logo} alt="logo" className="w-64" />
            </div>
               
         
         

            <div className="w-full text-secondary mr-10">
                <div className="flex items-center justify-end gap-3">
                <HomeIcon className="w-5 h-5" /> 
                <span>Commandez votre repas en ligne</span>
                </div>

                <div className=" flex items-center justify-end ">
                    <Bouton  className={"mr-3 mt-4  text-white"} color="primary" theme="">
                        Inscription
                    </Bouton>
                    <Bouton className={" mt-4"} color="secondary" theme="">
                        Connexion
                    </Bouton>
                    
                </div>
               
               
            </div>
                
            
        </div>
    
       
    </>
}

export default Header;
