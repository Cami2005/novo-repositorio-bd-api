import { con } from "./conection.js";

export async function InserirHeroi (heroi) {
   const comando= ` insert into tb_heroi (nm_heroi , ds_superpoder , bt_voa)
values ( ?, ?, ?)`
    const [resposta]= await con.query (comando, [heroi.nome, heroi.superpoder, heroi.voa]);
    heroi.id = resposta.insertId;
    return heroi;

}


export async function ListarTodos() {
    const comando= 
    `select id_heroi        id,
            nm_heroi		nome,
            ds_superpoder	superpoder,
            bt_voa			voa
    from    tb_heroi`;
    
    const[linhas] = await con.query(comando);
    return linhas;
}

