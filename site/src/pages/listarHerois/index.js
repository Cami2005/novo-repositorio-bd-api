import { useEffect, useState } from "react"
import { Listar } from "../../API/heroiAPI";

export default function Index(){
    const[heroi, setHeroi] = useState([]);

    async function Lista(){
        const resposta= await Listar();
        setHeroi(resposta)
    }

    useEffect(() => {
        Lista();
    } , [])

    return(
        <main>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Poder</th>
                        <th>Voa?</th>
                    </tr>
                </thead>
                <tbody>
                    {heroi.map( item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.superpoder}</td>
                            <td>{item.voa ? 'Sim' : 'Não'}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </main>
    )
}