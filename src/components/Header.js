import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from './base/menu_header'
import { motion } from "framer-motion";
import { useState } from 'react';

function Header() {
    const [switchPath, setSwitchPath] = useState("");
    return (
        <>
        <header>
            <div></div>
            <nav>
                <ul>
                    {
                        menu.map((mn,index) => (
                            <li key={index}>
                                <Link to={mn.permalien} onClick={() => setSwitchPath(mn.permalien.replace("/", ""))} style={switchPath === mn.permalien.replace("/", "") ? {color: "white",textDecoration: "none"} : {color: "var(--greyText)",textDecoration: "none"}}>{mn.titre}</Link>
                                { 
                                    mn.permalien.replace("/", "") === switchPath ? 
                                    (
                                        <motion.div className="case_toggle" layoutId="case_toggle"></motion.div>
                                    ) :
                                    (
                                        <></>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
