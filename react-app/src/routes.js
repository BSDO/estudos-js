import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Home } from "./paginas/home/home";
import Filme from "./paginas/Filme";
import Error404 from "./paginas/Erro";
import Favoritos from "./paginas/favoritos";


export function Rotas(){
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>     
                <Route path="/filme/:id" element={<Filme />} />  
                <Route path="/favoritos" element={<Favoritos />}/>    
                <Route path="*" element={<Error404 />}/>     
            </Routes>    
    
        </BrowserRouter>
        
    </>)
}

