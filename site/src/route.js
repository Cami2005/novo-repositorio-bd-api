import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import InserirHeroi from './pages/inserirHeroi';
import ListarHerois from './pages/listarHerois';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/inserirHeroi' element={<InserirHeroi/>}/>
                <Route path='/listarHerois' element={<ListarHerois/>}/>
            </Routes>
        </BrowserRouter>
    )
}