import { Link } from "react-router-dom";


export default function Index(){
    return(
        <main>
            <h1>Seja Bem-Vindo ao Mundo dos Heróis</h1>
            <ul>
                <li> <Link to='/InserirHeroi'> Insira Herói</Link></li>
                <li> <Link to='/ListarHerois'> Lista de Heróis</Link></li>

            </ul>
        </main>
    )
}
