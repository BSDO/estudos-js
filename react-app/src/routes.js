import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Home } from "./paginas/home";
import { Sobre } from "./paginas/sobre";
import Nutri from "./paginas/nutri";


export function Rotas(){
    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nutri />}/>     
                <Route path="/Home" element={<Home />}/>     
                <Route path="/Sobre" element={<Sobre />}/>     
            </Routes>    
    
        </BrowserRouter>
        
    </>)
}

