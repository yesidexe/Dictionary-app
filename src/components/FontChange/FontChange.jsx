import React from "react";
import FontList from "../FontList/FontList";
import { Arrow } from "../Icons/Icons";
export default function FontChange() {
    const [mostrarMenu, setMostrarMenu] = React.useState(false);
    
    return (
        <>
            <button onClick={() => setMostrarMenu(!mostrarMenu)}>
                <Arrow/>
            </button>
            <FontList mostrarMenu={mostrarMenu}/>
        </>
    )
}