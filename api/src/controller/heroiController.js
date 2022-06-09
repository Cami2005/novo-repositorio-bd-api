import { InserirHeroi, ListarTodos } from "../repository/heroiRepository.js";

import {Router} from 'express';



const server= Router();


server.post('/heroi', async (req, resp) => {
    try {
        const superheroiinserir= req.body;
        const S= await InserirHeroi(superheroiinserir);
        resp.send(S);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.menssage
        })
    }
});

server.get('/heroi', async(req, resp) => {
    try {
        const resposta= await ListarTodos();
        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        
    }
})


export default server;