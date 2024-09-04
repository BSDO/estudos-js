import Link from "next/link";
import styles from "./page.module.css";



interface Data{
    id:number,
    name:string,
    full_name:string,
    owner : 
        {
        login : string,
        avatar_url : string,
    },

}
async function getData() {

    const response = await fetch('http://api.github.com/users/bsdo/repos')

    return response.json();
}

export default async function Contato() {

    const data: Data[] = await getData();
    

    return (
        <>
            <h1>Contato</h1>
            <Link href='/'>Honme</Link>

            {data.map((item) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <br></br>
                    <h4>Repositior : {item.full_name}</h4>
                    <h4>Repositior : {item.name}</h4>
                    <h1>{item.owner.login}</h1>
                    <img src={item.owner.avatar_url} alt="teste"/>


                    <Link href={`/contatos/${item.id}`}>Id da apgian</Link>
                </div>
            
            ))}

         
  
                
        </>
           
    
    )
}
