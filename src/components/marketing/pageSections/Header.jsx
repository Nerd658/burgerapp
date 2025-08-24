import React from "react";
import Logo from "../../../medias/svg/logo.svg";
import { HomeIcon } from "@heroicons/react/24/outline";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="flex items-center justify-between py-10 relative z-10">
            <div className="w-full">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-64" />
                </Link>
            </div>

            <div className="w-full text-secondary mr-10">
                <div className="flex items-center justify-end gap-5">
                    <Link to="/" className="flex items-center gap-2 hover:text-white">
                        <HomeIcon className="w-5 h-5" />
                        <span>Accueil</span>
                    </Link>
                    <Link to="/contact" className="hover:text-white">
                        Contact
                    </Link>
                </div>

                <div className=" flex items-center justify-end ">
                    <Button  className={"mr-3 mt-4  text-white"} color="primary" theme="">
                        Inscription
                    </Button>
                    <Button className={" mt-4"} color="secondary" theme="">
                        Connexion
                    </Button>
                    
                </div>
               
               
            </div>
                
            
        </div>
    )
}

export default Header;
