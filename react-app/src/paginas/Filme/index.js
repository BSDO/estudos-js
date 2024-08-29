import {  useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Api from "../../servicos/api"
import './style.css'
import Header from "../../componentes/Header/Header";
import { toast } from 'react-toastify';



function Filme(){

    const { id } = useParams()
    const [detalhe,setDetalhe] = useState([])




    const navigate = useNavigate()

    useEffect(() => {

        async function BuscarDetalhes() 
        {
            await Api.get(`movie/${id}`,{
                params : {
                    api_key : "d56c164f6c3a58992802c4ae001e25eb",
                    language : "pt-BR",                  

                }
            }).then((resposta) =>{
                console.log(resposta.data)
                setDetalhe(resposta.data)

            }).catch((e) => {
                navigate('/')
            })

            // setRetorno(resposta.data)

        
        }   

        BuscarDetalhes();
    },[navigate,id])


    function salvarFilme(){
        
        const minhaLista = localStorage.getItem("@primeflix");
    
        let filmesSalvos = JSON.parse(minhaLista) || [];
    
        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === detalhe.id)
    
        if(hasFilme){
            toast.warning("FILME JA NA LISTA")
          return;
        }
    
        filmesSalvos.push(detalhe);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("FILME SALVO COM SUCESSO")

      }



    return (


        <>

            <Header/>
            <div className="filme-info">
                <h2>{detalhe.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${detalhe.backdrop_path}`}  alt={detalhe.backdrop_path}/>

                <h3>Sinopese</h3>
                <span>{detalhe.overview}</span>

                <strong>Avaliação :  {detalhe.vote_average}</strong>

                <div className="buttons">
                    <button onClick={salvarFilme}>Salvar</button>
                    <a href={`https://youtube.com/results?search_query=${detalhe.title}`} target="blank">
                        TRAILER
                    </a>

                </div>
            </div>
            


        </>
    )
}   

export default Filme;