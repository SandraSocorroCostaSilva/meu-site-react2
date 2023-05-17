import React from "react";

import "./Curriculo.css";



function Curriculo(props) { 
   const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculo;
    return (

      <main>
         <section>
            <h3>Resumo</h3>
            <p>{resumo}</p>
         </section>

         <section>
                <h3>Acadêmico</h3>
                <ul>
                {experienciaAcademica?.map((item, index) => (
                 <li key={index}> 
                 <b>({item.anoInicio} - {item.anoFim})</b> {item.titulo}
                 </li>
                 ))}
                </ul>
            </section>

         <section>
            <h3>Profissional</h3>
            <ul>
            {experienciaProfissional?.map((item, index) => (
                 <li key={index}> 
                 <b>({item.anoInicio} - {item.anoFim})</b> {item.titulo}
                 </li>
                 ))}
                </ul>
            </section>
             </main>
            )
            };

            export default Curriculo;




    

       
           
