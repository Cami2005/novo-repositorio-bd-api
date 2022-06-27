import { useState } from "react";
import { Inserir } from "../../API/heroiAPI";
import './index.css';



export default function Index(){
    const [nome, setNome]= useState('');
    const [superpoder, setSuperPoder]= useState('');
    const [voa, setVoa]= useState('');

    async function Clique(){
        try {
            const r= await Inserir(nome, superpoder, voa);
            alert('Herói salvo com sucesso')
        } catch (err) {
            alert(err.message)
        }
    }
    return(
        <main className="container1">

        <div className="caixa">
            <h1>Insira um Herói</h1>

                    <div className="div1">
                        <label> Nome do Herói </label>
                        <input type='text' value={nome} onChange={e => setNome (e.target.value)} />
                    </div>

                    <div className="div1">
                        <label> Poder do Herói </label>
                        <input type='text' value={superpoder} onChange={e => setSuperPoder (e.target.value)} />
                    </div>

                    <div>
                        <label className="div1"> Voa? </label>
                        <input type='checkbox' checked={voa} onChange={e => setVoa (e.target.checked)} />
                    </div>

                    <div>
                        <button  className="botao" onClick={Clique}> Salvar </button>
                    </div>
        </div>

        </main>
    )
}