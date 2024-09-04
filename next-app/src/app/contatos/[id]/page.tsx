import Link from "next/link";
import styles from "./page.module.css";



export default async function Contato({ params } : number) {




    return (
        <>
            <h1>Contato {params.id}</h1>
            <Link href='/contatos'>Voltar</Link>
                
        </>
           
    
    )
}
