/**
 * Para poder crear nuestras reutas debemos importar lo siguiente
 * BrowsRouter: Va a envolver todas las rutas que creemos
 * Routes: es el child de BrowsRouter el cual nos va a permitir crear las rutas por componente
 * Route: es el encargado de recibir el path y el element y renderizar el element en el path creado.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Flags from "../pages/Flags";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrator";

//Nuestro Router va a ser un componente el cual se encargue de retornar 
//las rutas con su respectiva vista

const Router = () => {
    //como esto es un componente tenemos que usar return para poder crear las rutas
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/flags" element={<Flags />}/>
                <Route path="/youtube" element={<Youtube />}/>
                <Route path="/youtube/administrador" element={<YoutubeAdministrator />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router