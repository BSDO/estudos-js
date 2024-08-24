
import {useEffect, useState} from 'react'

// import Nome  from './componentes/Teste';

// function App() {  


//   const [tarefas, setTarefas] = useState([]);
//   const [valor, setValor] = useState('');
  
//   useEffect(() => {
//     const retorno = localStorage.getItem('@tarefa');
//     if (retorno) {
//       setTarefas(JSON.parse(retorno));
//     }
   
//   }, []);
  
//   useEffect(() => {
//     if (tarefas.length > 0) {
//       localStorage.setItem('@tarefa', JSON.stringify(tarefas));
//     }
//   }, [tarefas]);

//   function enviar(e){
    
//       e.preventDefault();

//       setTarefas([...tarefas,valor])
//       setValor('')


//   }

//   return (
//     <>

//       <form onSubmit={enviar}>
//       <br/>
//         <div>
//           <label>Tarefedas</label>
//           <input placeholder='Digite' onChange={(e) => setValor(e.target.value)} /> 
//         </div><br/>

//         <div>
//           <button>Enviar</button>
//         </div>
 

//       </form>


//       <div>
//         Tarefa : 
//         <ul>
//           {tarefas.map(item => (
//             <li key={item}>{item}</li>
//           ))}

//         </ul>

//       </div>


//     </>
//   );
// }

// export default App; */

// https://sujeitoprogramador.com/rn-api/?api=posts
import { Link } from "react-router-dom"

function Nutri() {  

  const [dados,setDados] = useState([])

  useEffect(() =>{

    function carregaApi(){
        fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((data) => data.json())
        .then((retorno) =>  setDados(retorno))

       
    }

    carregaApi()
  },[])

  return (
    <>  

      <div>
          {dados.map((item) => {
            return(
              <>
                <div key={item.id} className='container'>
                    <h1>{item.titulo} </h1>
                    <img src={item.capa}  alt='teste'/>  
                    <p>{item.subtitulo}</p>
                </div>

          </>
            )
         
        })}

      </div>
      <Link to='/home'>home</Link>

    </>
  )

}

export default Nutri;