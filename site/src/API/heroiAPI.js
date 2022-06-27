import axios from 'axios'
const api= axios.create({
    baseURL: 'http://localhost:5000'
})

export async function Inserir(nome, superpoder, voa){
    const resposta= await api.post('/heroi' , {
        nome: nome,
        superpoder: superpoder,
        voa: voa
    })
    return resposta.data;
}

export async function Listar(){
    const resposta= await api.get('/heroi');
    return resposta.data;
}