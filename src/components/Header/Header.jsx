import React from "react";
import "./Header.css";

function Header (props){
    const { nome, cargo, foto} = props.informacoes
    return <header>
    <div className="center">
    <img src={foto} alt="Foto de Sandra "/>
    </div>
    <h1>{nome}</h1>
    <h2>{cargo}</h2>

   </header>

    
}

export default Header;

