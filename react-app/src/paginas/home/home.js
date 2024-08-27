
import  Header  from '../../componentes/Header/Header'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Api from "../../servicos/api"
import './style.css'
export function Home (){

    const [filme,setFilmes] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        async function CarregarFilmes() {
            const resposta = await Api.get("movie/now_playing",{
                params : {
                    api_key : "d56c164f6c3a58992802c4ae001e25eb",
                    language : "pt-BR",
                    page : 1,

                }
            })
            setFilmes(resposta.data.results)
            setLoading(false)
            
        }   

        CarregarFilmes();


    },[])



    return(<>
    
        {loading? (

            <>
                 <Header />
                <h1>Carregando....</h1>
            </>
        ) : (
            <>

                    <Header />
                    <div className='container'>
                        <div className='listar-filmes'>
                            {filme.map((item) => (
                                <>  

                                    <article key={item.id}>                                  
                                        <strong>{item.title}</strong>
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}  alt={item.poster_path}/>
                                        <Link to={`/filme/${item.id}`} className='link' >Acessar</Link>

                                    </article>
                                    
                                    
                                
                                    
                                
                                </>
                                
                            ))} 
                        


                        </div>


                    </div>
   
            </>
        )}
       
    </>)
}