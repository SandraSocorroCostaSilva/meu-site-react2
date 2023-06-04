import React from "react";
import api from "./api";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Curriculo from "./components/Curriculo/Curriculo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contato from "./components/Contato/Contato";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    const [informacoes, setInformacoes] = React.useState({});
    const [curriculo, setCurriculo] = React.useState({});
    const [portfolio, setPortfolio] = React.useState([]);
  
    const fetchDados = async () => {
      try {
        const informacao = await api.get(`/informacoes/1`);
        setInformacoes({
          foto: informacao.data.foto,
          nome: informacao.data.nome,
          cargo: informacao.data.cargo
        });
  
        const experienciaAcademica = await api.get(`/experiencias?tipo=Acadêmico`);
        const experienciaProfissional = await api.get(`/experiencias?tipo=Profissional`);
  
        setCurriculo({
          resumo: informacao.data.resumo,
          experienciaAcademica: experienciaAcademica.data,
          experienciaProfissional: experienciaProfissional.data
        });
  
        const response = await api.get('/portfolio');
       
        setPortfolio(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    console.log(portfolio);

    React.useEffect(() => {
        fetchDados();
      }, []);

    return(
        <>
        <Header informacoes = {informacoes} />
        <BrowserRouter>
        <Navbar></Navbar>
            
                
      <Routes>
        
          <Route index element={<Curriculo curriculo={curriculo} />} />
          <Route path="Portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="Contato" element={<Contato />} />
        
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
    )
};


export default App;
