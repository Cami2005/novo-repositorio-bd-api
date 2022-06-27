import { Link } from "react-router-dom";
import './index.css';



export default function Index(){
    return(
        <main className="home">
            <h1 className="texto1">Seja Bem-Vindo ao Mundo dos Heróis</h1>
            <ul className="lista">
                <li> <Link className="lista" to='/InserirHeroi'> Insira Herói</Link></li>
                <li> <Link className="lista" to='/ListarHerois'> Lista de Heróis</Link></li>

            </ul>
        </main>
    )
}
