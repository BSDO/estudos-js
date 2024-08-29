import Header from "../../componentes/Header/Header";
import './style.css'
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function Favoritos(){

    const [filmes,setFilmes] = useState([])
    useEffect(() => {

        const filme = JSON.parse(localStorage.getItem('@primeflix')) || [];
        setFilmes(filme)

    },[])


    function Excluir(id){
        
        let filtros = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtros)


        localStorage.setItem('@primeflix',JSON.stringify(filtros))
        toast.success('Filme excluido')
    }

    return(
        <>
            <Header />
            <h2>Meus Filmes</h2>
            <div className="container-table">
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Filme</td>

                            <td>detalhes</td>
                            <td>Excluir</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {filmes.map((item) => (
                            <tr>
                                
                                
                                <td key={item.id}>{item.id}</td>
                                <td >{item.title}</td>
                                <td >
                                    <Link to={`/filme/${item.id}`} className='link' >Acessar</Link>
                                </td>
                                <td >
                                    <button onClick={() => Excluir(item.id)} >Excluir</button>
                                </td>
                            

                            </tr>
                                
                        ))}


                    </tbody>

                </table>


            </div>
        </>
    )
}

export default Favoritos;